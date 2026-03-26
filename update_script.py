import re

file_path = "d:/Vishnu V Nair mockup/index.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Swap Navigation
nav_target = '''            <li><a href="#about" class="nav-link">Who am I</a></li>
            <li><a href="#education" class="nav-link">Education</a></li>
            <li><a href="#experience" class="nav-link">Experience</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>'''
nav_rep = '''            <li><a href="#about" class="nav-link">Who am I</a></li>
            <li><a href="#experience" class="nav-link">Experience</a></li>
            <li><a href="#education" class="nav-link">Education</a></li>
            <li><a href="#certifications" class="nav-link">Certifications</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>'''
html = html.replace(nav_target, nav_rep)

# 2. Swap sections
exp_match = re.search(r'(        <!-- Experience Section -->.*?</section>\n\n)', html, re.DOTALL)
edu_match = re.search(r'(        <!-- Education Section -->.*?</section>\n\n)', html, re.DOTALL)

if exp_match and edu_match:
    edu_content = edu_match.group(1)
    exp_content = exp_match.group(1)
    html = html.replace(edu_content, '')
    html = html.replace(exp_content, exp_content + edu_content)

# 3. Add certs
certs = """        <!-- Certifications Section -->
        <section id="certifications" class="section smooth-section">
            <div class="container">
                <h2 class="section-title reveal slide-up text-center">Certifications</h2>
                <div class="cert-grid">
"""
for i in range(10):
    delay = f" delay-{(i%3)+1}" if i%3 != 0 else ""
    certs += f"""                    <div class="cert-card card-glass reveal slide-up{delay}">
                        <div class="cert-placeholder"></div>
                        <h3 class="cert-title">Certification Title Placeholder</h3>
                        <p class="cert-issuer">Issuing Organization Placeholder</p>
                    </div>
"""
certs += """                </div>
            </div>
        </section>

"""
html = html.replace("        <!-- Contact Section -->", certs + "        <!-- Contact Section -->")

# 4. WhatsApp Button
wa_target = '<a href="mailto:hello@vishnuvnair.com" class="cta-btn reveal slide-up delay-2">Get in Touch</a>'
wa_rep = '''<a href="https://wa.me/" target="_blank" class="cta-btn reveal slide-up delay-2 whatsapp-btn">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Get in Touch
                </a>'''
html = html.replace(wa_target, wa_rep)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)

css_path = "d:/Vishnu V Nair mockup/styles.css"
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

cert_css = """
/* Certifications Section */
.cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding-top: 2rem;
}

.cert-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
}

.cert-placeholder {
    width: 100%;
    aspect-ratio: 4/3;
    background: rgba(255,255,255,0.05);
    border: 1px dashed rgba(255,255,255,0.1);
    border-radius: 12px;
    margin-bottom: 1.5rem;
    transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.cert-card:hover .cert-placeholder {
    transform: scale(1.05);
    border-color: rgba(52, 211, 153, 0.4);
}

.cert-title {
    font-size: 1.2rem;
    color: var(--text-light);
    margin-bottom: 0.5rem;
    font-family: var(--font-display);
}

.cert-issuer {
    font-size: 0.9rem;
    color: var(--text-muted);
}

.whatsapp-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
}

"""
css = css.replace("/* Contact Section */", cert_css + "/* Contact Section */")

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("Updated perfectly.")
