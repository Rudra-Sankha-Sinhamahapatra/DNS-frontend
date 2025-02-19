import { NextResponse } from "next/server";
import DNS from "dns2";

const dns = new DNS({
  nameServers: ["dns-backend.rudrasankha.com"],
  port: 53,
  timeout: 3000, 
  retries: 1    
});

export async function POST(request: Request) {
  try {
    const { domain } = await request.json();
    if (!domain) {
      return NextResponse.json(
        { error: "Domain is required" },
        { status: 400 }
      );
    }

    const startTime = Date.now();

    try {
      const result: any = await dns.query(domain, 'A');
      const queryTime = Date.now() - startTime;

      const rcode = result?.header?.rcode ?? -1;
      const answers = result?.answers || [];
      const authorities = result?.authorities || [];
      const additionals = result?.additionals || [];
      const status = rcode === 0 ? "NOERROR" : "NXDOMAIN";
      const validityNote = status === "NOERROR" ? "Domain is valid" : "Domain not valid";

      const formattedResponse = `
; <<>> DNS Lookup <<>> ${domain}
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: ${status}
;; flags: qr aa rd ra; QUERY: 1, ANSWER: ${answers.length}, AUTHORITY: ${authorities.length}, ADDITIONAL: ${additionals.length}

;; ANSWER SECTION:
${answers
  .map(
    (answer: any) =>
      `${domain}.    ${answer.ttl || 300}    IN    ${answer.type}    ${
        answer.address || ""
      }`
  )
  .join("\n")}

;; Validity: ${validityNote}
;; Query time: ${queryTime} msec
;; SERVER: dns-backend.rudrasankha.com#53(dns-backend.rudrasankha.com)
;; WHEN: ${new Date().toLocaleString()}
      `.trim();

      return NextResponse.json({
        result: formattedResponse,
        status,
        answers,
        raw: result,
      });
    } catch (dnsError) {
      console.error("DNS Resolution Error:", dnsError);
      return NextResponse.json(
        {
          error: "DNS lookup failed",
          details:
            dnsError instanceof Error ? dnsError.message : "Unknown error",
        },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}