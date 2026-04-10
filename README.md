# CTFd Resecurity Theme

A modern, fully-responsive CTFd custom theme inspired by the Resecurity cybersecurity platform design. This theme features a sophisticated purple and blue gradient color scheme, clean typography, and a mobile-first responsive layout.

## Overview

This is a **production-ready CTFd theme** with:
- ✅ Complete design system extracted from Resecurity.com
- ✅ CSS custom properties (variables) for easy customization
- ✅ Mobile-first responsive design (576px, 834px, 1280px+ breakpoints)
- ✅ Modern Jinja2 template inheritance with CTFd best practices
- ✅ Zero hardcoded challenge data (fully dynamic)
- ✅ Modern interactive components with smooth animations
- ✅ Accessibility-first HTML structure
- ✅ Performance optimized (minimal dependencies)

## Installation

### Prerequisites

- CTFd v3.0.0 or higher
- Access to CTFd installation directory
- Basic knowledge of CTFd folder structure

### Step 1: Extract Theme Files

1. Download/extract this theme folder
2. Navigate to your CTFd installation: `<ctfd-root>/CTFd/themes/`
3. Create a new folder named `resecurity-modern` (or your preferred name)
4. Copy all files into this folder

**Folder structure after installation:**
```
CTFd/themes/resecurity-modern/
├── templates/
│   ├── base.html
│   ├── challenges.html
│   ├── challenge.html
│   ├── scoreboard.html
│   ├── login.html
│   ├── register.html
│   └── errors/
├── static/
│   ├── css/
│   │   └── theme.css
│   ├── js/
│   │   └── theme.js
│   └── img/
├── config.json
└── README.md
```

### Step 2: Enable Theme in CTFd Admin Panel

1. Log in to CTFd as an administrator
2. Navigate to **Admin Panel** → **Settings** → **Appearance**
3. Under "Custom Theme", select **"resecurity-modern"** from the dropdown
4. Click **"Save"**
5. Refresh the CTFd page to see the new theme

### Step 3: Verify Installation

- ✓ Navigation bar displays with purple gradient logo
- ✓ Challenges page shows challenge cards with category badges
- ✓ Login/Register pages have themed auth forms
- ✓ Scoreboard displays with gradient header
- ✓ Responsive layout works on mobile devices

## Design System Documentation

### Color Palette

Extracted from Resecurity.com's modern design:

#### Primary Colors
- **Dark**: `#030303` - Primary text, backgrounds
- **Light**: `#ffffff` - Backgrounds, contrast text

#### Accent Colors
- **Purple**: `#8a3ffc` - Primary accent, buttons, gradients
- **Blue**: `#0f62fe` - Secondary accent
- **Purple Light**: `#c773a6` - Gradient start
- **Gradient**: `linear-gradient(135deg, #8B3FFC 0%, #1062FE 100%)` - Primary UI gradient

#### Semantic Colors
- **Background**: `#f5f6fa` - Page background
- **Success**: `#10b981` - Success states
- **Warning**: `#f59e0b` - Warning states
- **Error**: `#ef4444` - Error states
- **Info**: `#3b82f6` - Info states

### Typography

**Font Family**: Graphik (primary), system fonts (fallback)

**Size Scale** (rem-based for accessibility):
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)

**Font Weights**:
- Light: 300
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Spacing Scale (CSS Variables)

All spacing is based on a 4px unit:
- `--space-1` → 0.25rem (4px)
- `--space-2` → 0.5rem (8px)
- `--space-3` → 0.75rem (12px)
- `--space-4` → 1rem (16px)
- `--space-6` → 1.5rem (24px)
- `--space-8` → 2rem (32px)
- `--space-12` → 3rem (48px)

### UI Components

#### Buttons
- `.btn` - Base button
- `.btn-primary` - Primary gradient button
- `.btn-secondary` - Secondary button
- `.btn-outline` - Outline button
- `.btn-success` - Success state button
- `.btn-error` - Error state button

**Sizes**: `.btn-sm`, `.btn-lg`, `.btn-block`

#### Cards
- `.card` - Standard card with shadow and border
- `.card-header` - Card title section
- `.card-body` - Card content
- `.card-footer` - Card footer with action buttons

#### Badges
- `.badge` - Inline badge element
- `.badge-primary`, `.badge-success`, `.badge-error`, etc.

#### Tables
- Striped header with gradient background
- Hover effects on rows
- Responsive padding

#### Alerts
- `.alert-success` - Success message
- `.alert-error` - Error message
- `.alert-warning` - Warning message
- `.alert-info` - Info message

### Responsive Breakpoints

Mobile-first design with breakpoints at:
- **576px** - Small devices (tablets)
- **834px** - Medium devices (larger tablets)
- **1280px** - Large devices (desktops)
- **1380px** - Extra large (wide monitors)
- **1660px** - Ultra-wide (cinema displays)

## Template Structure

### Template Hierarchy

```
base.html (Extends none - root template)
├── challenges.html (Challenge list grid)
├── challenge.html (Challenge detail view)
├── scoreboard.html (Leaderboard)
├── login.html (Authentication)
├── register.html (Registration)
└── errors/ (Error pages)
```

### Base Template (`base.html`)

The root template that all pages inherit from:
- Navigation bar with responsive menu
- Flash message display
- Content block for page-specific content
- Footer with branding
- CSS/JS includes

**Blocks available for override:**
- `{% block title %}` - Page title
- `{% block page_description %}` - Meta description
- `{% block css %}` - Inline CSS
- `{% block content %}` - Main page content
- `{% block scripts %}` - Inline JavaScript

### Challenge Pages

#### `challenges.html` - Challenge List
- **Dynamic**: Lists all challenges from CTFd database
- **Features**:
  - Filter buttons by category
  - Challenge cards with points, description, solves count
  - Status indicators (solved/unsolved)
  - Responsive grid layout

#### `challenge.html` - Challenge Detail
- **Dynamic**: Displays single challenge with full details
- **Features**:
  - Challenge description and files
  - Flag submission form
  - Sidebar with points, solves, attempts
  - Hint system support
  - Direct CTFd API integration for flag submission

### Authentication Pages

#### `login.html`
- Email/username and password fields
- Remember me checkbox
- Link to registration
- Error message display
- Form validation

#### `register.html`
- Username, email, password fields
- Password strength indicator
- Password confirmation
- Form validation with real-time feedback
- Link to login

### Scoreboard (`scoreboard.html`)
- **Dynamic**: Fetches team standings from CTFd
- **Features**:
  - Ranking table with medal badges (🥇🥈🥉)
  - Team search functionality
  - Filter options
  - Challenge solve counts
  - Last activity timestamps

## Customization Guide

### Changing Colors

Edit CSS custom properties in `static/css/theme.css` `:root` section:

```css
:root {
  --color-accent-purple: #8a3ffc;    /* Change primary accent */
  --color-accent-blue: #0f62fe;      /* Change secondary accent */
  --color-background: #f5f6fa;       /* Change background */
  /* etc. */
}
```

### Changing Fonts

```css
:root {
  --font-family-primary: "Your Font", sans-serif;
  --font-family-mono: "Your Mono Font", monospace;
}
```

### Customizing Component Styling

Edit component styles in `theme.css`. Example: Override button styling:

```css
.btn-primary {
  background: linear-gradient(135deg, #your-color-1, #your-color-2);
  /* Additional customizations */
}
```

### Adding Custom Pages

1. Create new template in `templates/` folder
2. Extend base.html: `{% extends "base.html" %}`
3. Override blocks as needed
4. Add route in CTFd configuration

Example:
```html
{% extends "base.html" %}

{% block title %}Custom Page - CTFd{% endblock %}

{% block content %}
  <div class="container">
    <!-- Your content -->
  </div>
{% endblock %}
```

## Technical Details

### Design Decisions

1. **CSS Custom Properties (Variables)**
   - Enables easy global customization
   - Better maintainability
   - Fallback support for older browsers

2. **Mobile-First Architecture**
   - Base styles for mobile devices
   - Progressive enhancement for larger screens
   - Optimal performance on all devices

3. **Jinja2 Template Inheritance**
   - Single `base.html` as source of truth
   - Minimal template duplication
   - Easy updates across all pages
   - Proper CTFd variable usage (never hardcoded)

4. **CSS Grid & Flexbox**
   - Modern layout techniques
   - No framework dependencies
   - Smaller CSS footprint (~50KB)

5. **Animation & Transitions**
   - Smooth interactions without jQuery
   - CSS-based animations for better performance
   - User preference respecting (prefers-reduced-motion aware)

### File Sizes (Optimized)

- `theme.css` - ~45KB (minified: ~30KB)
- `theme.js` - ~8KB (minified: ~4KB)
- All templates - ~35KB combined

### Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## API Integration Points

The theme integrates with CTFd through:

1. **Flag Submission** - `/api/v1/challenges/{id}/attempts`
   - POST request with flag submission
   - Handles correct/incorrect responses
   - Updates UI with results

2. **Challenge Loading** - CTFd template variables
   - `{{ challenges }}` - List of all challenges
   - `{{ challenge }}` - Single challenge object
   - `{{ standings }}` - Scoreboard data

3. **User Context** - Template variables
   - `{{ user }}` - Current logged-in user
   - `{{ authed }}` - Authentication status
   - `{{ is_admin }}` - Admin permissions

## Troubleshooting

### Theme Not Appearing
1. Check theme folder location: `CTFd/themes/resecurity-modern/`
2. Verify `config.json` exists in theme root
3. Restart CTFd service
4. Clear browser cache (Ctrl+Shift+Del)

### Styling Issues
1. Check `static/css/theme.css` is linked in `base.html`
2. Verify CSS wasn't overridden by browser extensions
3. Check CSS variable fallbacks

### Challenge Loading Issues
1. Verify CTFd challenges exist in database
2. Check user is authenticated to view challenges
3. Review browser console for JavaScript errors

### Flag Submission Not Working
1. Verify CSRF token in page headers
2. Check CTFd API endpoint is accessible
3. Review network tab in browser DevTools

## Support & Development

### Adding New Challenges Features
1. Modify `templates/challenge.html` to add UI elements
2. Update `static/js/theme.js` with event handlers
3. Ensure all dynamic data comes from CTFd variables

### Extending Navigation
1. Edit `templates/base.html` navbar section
2. Add links to `.navbar-nav ul` element
3. Style using existing CSS classes

### Custom Error Pages
1. Create `templates/errors/404.html`, `500.html`, etc.
2. Extend `base.html` for consistency
3. Use semantic error styling

## License

MIT License - Feel free to customize and redistribute

## Credits

**Design System Source**: Resecurity.com modern theme
**Framework**: CTFd (https://ctfd.io/)
**Typography**: Graphik font family

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Maintained By**: CTFd Community
