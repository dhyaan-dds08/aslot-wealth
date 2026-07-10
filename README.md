# Aslot Wealth

A    modern wealth management website built with Next.js, featuring a blog and admin dashboard.

## Features

- **Blog System**: Create, update, and manage blog posts
- **Admin Dashboard**: Secure admin panel for content management
- **Authentication**: User login/logout with Supabase
- **Image Upload**: Cloud-based image storage
- **Responsive Design**: Built with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Supabase (Database & Auth)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aslot-wealth.git
   cd aslot-wealth
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Visit the homepage to explore the website
- Access `/admin/login` for admin panel
- Use the dashboard to manage blog posts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
