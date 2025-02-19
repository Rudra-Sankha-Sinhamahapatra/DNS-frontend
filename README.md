# DNS Lookup System

A modern DNS lookup system with a Next.js frontend that queries a custom DNS server written in Go.

## Architecture

The system consists of two main components:

1. **Frontend (This repo)**
   - Next.js application that makes direct DNS queries
   - Uses the `dns2` package for DNS protocol communication
   - Modern UI with real-time results

2. **DNS Server ([Backend repo](https://github.com/Rudra-Sankha-Sinhamahapatra/DNS-Go))**
   - Custom DNS server written in Go
   - Handles DNS protocol queries directly
   - Hosted at `dns-backend.rudrasankha.com`

## Features

- ⚡ **Direct DNS Communication**: No HTTP API middleman
- 🛡️ **Native DNS Protocol**: Uses standard DNS port 53
- 📊 **Comprehensive Results**: Full DNS record information
- 🎨 **Modern UI/UX**: Real-time query interface
- 📱 **Responsive Design**: Works on all devices

## Tech Stack

### Frontend
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [dns2](https://www.npmjs.com/package/dns2) package for DNS queries
- [shadcn/ui](https://ui.shadcn.com/)

### DNS Server
- [Go](https://golang.org/)
- Native DNS protocol implementation
- Custom record handling

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Rudra-Sankha-Sinhamahapatra/dns-frontend.git
cd dns-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## How It Works

1. User enters a domain name in the frontend interface
2. Frontend uses `dns2` package to make a direct DNS query to `dns-backend.rudrasankha.com:53`
3. The Go DNS server processes the query and returns DNS records
4. Frontend formats and displays the DNS response

Example DNS query response:
```text
; <<>> DNS Lookup <<>> example.com
;; ANSWER SECTION:
example.com.    300    IN    A    93.184.216.34

;; Query time: 85 msec
;; SERVER: dns-backend.rudrasankha.com#53
```

## DNS Server Setup

For information about setting up the Go DNS server, visit the [DNS-Go repository](https://github.com/Rudra-Sankha-Sinhamahapatra/DNS-Go).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License

Copyright (c) 2025 Rudra Sankha Sinhamahapatra

[View Full License](LICENSE)

## Contact

Rudra Sankha Sinhamahapatra

Project Links:
- Frontend: [https://github.com/Rudra-Sankha-Sinhamahapatra/dns-frontend](https://github.com/Rudra-Sankha-Sinhamahapatra/dns-frontend)
- DNS Server: [https://github.com/Rudra-Sankha-Sinhamahapatra/DNS-Go](https://github.com/Rudra-Sankha-Sinhamahapatra/DNS-Go)