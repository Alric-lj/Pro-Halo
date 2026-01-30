# Halo Pro Website

Marketing and landing page for **Halo Pro** - a professional halation & mist emulation application for photographers and colorists.

- **Live URL:** https://halopro.app
- **GitHub Repo:** https://github.com/Alric-lj/Pro-Halo

---

## Repository Structure

```
HALO PRO WEBSITE 0.1/
├── index.html              # Main single-page site (all tabs)
├── style.css               # All styles
├── favicon.svg             # Site favicon
├── CNAME                   # GitHub Pages custom domain (halopro.app)
├── og-image-template.html  # Open Graph image template
├── Before after/           # Comparison slider images
│   ├── HALO PRO Exampel 1 BEFORE.jpg
│   ├── HALO PRO Exampel 1 AFTER HALATION EMULATION.jpg
│   ├── HALO PRO Exampel 2 BEFORE.jpg
│   └── HALO PRO Exampel 2 AFTER HALATION EMULATION.jpg
├── Support tab.html        # (unused/draft)
├── Support tab 2.html      # (unused/draft)
└── .claude/                # Claude Code settings
```

---

## Site Architecture

The site uses a **tab-based navigation** system with three main sections:

### Home Tab
- Hero section with tagline
- Before/after comparison slider (interactive image comparison)
- "Why Halo Pro?" feature highlights
- Features overview
- Pricing summary
- System Requirements
- Installation instructions
- Development Status indicator

### Development Tab
- Timeline of development milestones (2024-2027)
- Status badges for each milestone (Completed, In Progress, Planned)
- Visual progress tracking

### Supporter Tab
- Subscription tiers (Patreon-based)
- One-time purchase options (Gumroad)
- Free version information
- Dual CTA buttons linking to both platforms

---

## Technical Details

### Stack
- **Static HTML/CSS/JS** - No build tools or frameworks
- **Hosting:** GitHub Pages with custom domain

### Typography
- **Headings:** Source Serif 4 (Google Fonts)
- **Body:** DM Sans (Google Fonts)

### Color Scheme
| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0a` | Main dark background |
| Accent | `#ff934f` | Orange highlights, CTAs |
| Text | `#ffffff` | Primary text |
| Muted | `#888888` | Secondary text |

### Responsive Design
- Mobile breakpoints at 768px and 480px
- Flexible grid layouts
- Touch-friendly navigation

---

## Key Components

### Tab Navigation
Vanilla JavaScript tab system in `index.html`. Tabs are switched by adding/removing `.active` classes on tab buttons and content panels.

### Before/After Comparison Slider
Interactive image comparison component using a draggable slider. Located in the Home tab hero section. Images stored in `Before after/` directory.

### Timeline Cards
Development milestones displayed as cards with:
- Date badges
- Status indicators (Completed/In Progress/Planned)
- Description text

### Pricing Tier Cards
Supporter tiers featuring:
- Tier name and price
- Feature lists
- Dual CTA buttons (Gumroad + Patreon)

---

## External Links

| Platform | URL |
|----------|-----|
| Patreon | https://www.patreon.com/HaloPro |
| Gumroad | https://alriclj.gumroad.com/l/xcngmg |
| Contact Email | alric.ljunghager@gmail.com |
| Instagram | @alric.ljunghager |

---

## Development

### Local Development
Simply open `index.html` in a browser. No build step required.

### Deployment
Push to `main` branch - GitHub Pages automatically deploys.

### Making Changes
1. Edit `index.html` for content/structure
2. Edit `style.css` for styling
3. Commit and push to deploy

---

## SEO & Meta

The site includes:
- Open Graph meta tags for social sharing
- Twitter Card meta tags
- Structured data (JSON-LD)
- Favicon (SVG)
- Custom OG image template (`og-image-template.html`)
