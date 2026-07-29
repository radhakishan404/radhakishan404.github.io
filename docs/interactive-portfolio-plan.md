# Interactive portfolio implementation plan

## Locked legacy shell

The legacy navigation is the permanent visual anchor of the redesign.

- Keep `Header.js` and the existing sidebar DOM structure unchanged.
- Preserve the 60px desktop rail, 385px expanded menu, menu timing, logo, and four navigation rows.
- Preserve Poppins and Nova Cut in the same roles they currently serve.
- Preserve `#161122`, `#1c2849`, and the existing multi-color gradient.
- Keep the operating-system cursor everywhere.
- Do not add stars, a particle letter R, cursor trailers, or full-page pointer effects.

## Sidebar-compatible additions

These additions live in the page content and visually continue the sidebar without changing it:

1. **Adjacent content rail** — section numbers and labels align immediately beside the desktop sidebar.
2. **Gradient datum rules** — thin horizontal rules reuse the sidebar's active-item gradient.
3. **Indexed page rhythm** — major sections use `01`, `02`, `03` labels in Nova Cut.
4. **Deep-purple transition panels** — selected interstitials reuse the expanded navigation surface.
5. **Editorial navigation language** — short titles and plain descriptions follow the sidebar menu hierarchy.
6. **Rail-aware motion** — content enters from the sidebar edge, with restrained transform and opacity only.
7. **Mobile continuity** — the existing mobile header stays intact and section indexing moves into the page.

## Page rollout

Each slice must be testable before work begins on the next one.

### Slice 1 — Homepage opening

- Sidebar-compatible page shell
- Semantic identity and introduction
- One clear presentation of the name
- Restrained portrait interaction with no duplicate identity artwork
- Portrait and current role information
- Portfolio and About actions
- Desktop, mobile, and reduced-motion behavior

Following the first review, Canvas Text was removed from the opening because it
repeated the name and weakened the hierarchy. If it returns later, it must carry
section-specific language rather than identity content.

### Slice 2 — Homepage capabilities

- Text flipping board for real disciplines
- Capabilities layout adapted from feature sections
- One restrained Squiggly Text accent

### Slice 3 — Homepage featured work

- One MacBook scroll sequence for a flagship project
- Selected 3D project cards
- Static mobile alternatives

### Slice 4 — Homepage proof and writing

- Real code block
- Featured articles with text-hover treatment
- ASCII portrait transition
- Genuine testimonials only when source material exists

### Slice 5 — Homepage closing

- Minimal contact CTA
- Magnetic primary action
- Restrained grid/noise background

### Slice 6 — Portfolio and project detail pages

- Restore the complete historical and current project catalog
- Search and filter states
- Case-study templates

### Slice 7 — Articles and article detail pages

- Restore the current article catalog
- Editorial listing and code-aware article rendering

### Slice 8 — About and Contact pages

- Career story and capability evidence
- Accessible contact form with submitting, success, and error states

### Slice 9 — Final quality and deployment

- Reduced-motion and keyboard review
- Performance profiling
- Responsive visual regression
- SEO, sitemap, prerender, and canonical-domain verification

## Motion budget

- At most one continuous canvas loop on a page.
- At most one large scroll-linked sequence active at a time.
- Pause animation outside the viewport and while the tab is hidden.
- Do not activate hover physics on touch devices.
- Every canvas or animated treatment must have readable HTML and static fallbacks.
- Prefer transform and opacity; avoid layout-triggering animation.

## Approval gate

After every slice:

1. Run the page locally.
2. Verify desktop and mobile layouts.
3. Run a production build.
4. Share the test URL and the exact changed scope.
5. Wait for feedback before beginning the next slice.
