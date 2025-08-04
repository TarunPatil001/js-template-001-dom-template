// Pure JS global CSS reset
document.querySelectorAll('*').forEach(el => {
    el.style.margin = '0';
    el.style.padding = '0';
    el.style.boxSizing = 'border-box';
});
// Hide horizontal scrollbar
document.body.style.overflowX = 'hidden';

// Select the parent element
const parent = document.getElementById('parent');

// Create the nav container
const nav = document.createElement('nav');
nav.style.backgroundColor = '#333';
nav.style.padding = '10px';
nav.style.display = 'flex';
nav.style.justifyContent = 'space-between';
nav.style.alignItems = 'center';
nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
nav.style.position = 'sticky';
nav.style.top = '0';
nav.style.zIndex = '1000';

// Create brand/logo element
const brand = document.createElement('div');
brand.textContent = 'MySite';
brand.style.color = '#fff';
brand.style.fontFamily = 'Georgia, serif';
brand.style.fontSize = '24px';
brand.style.fontWeight = 'bold';
brand.style.cursor = 'pointer';

// Create container for links
const linksContainer = document.createElement('div');
linksContainer.style.display = 'flex';
linksContainer.style.gap = '20px';
linksContainer.style.padding = '0 20px';
linksContainer.style.margin = '0 20px';

// Define the navbar links
const links = [
    { text: 'Home', section: 'hero' },
    { text: 'About', section: 'infoSection' },
    { text: 'Services', section: 'fullSection' },
    { text: 'Contact', section: 'contactSection' }
];

links.forEach(link => {
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = link.text;
    a.style.color = '#fff';
    a.style.textDecoration = 'none';
    a.style.padding = '8px 16px';
    a.style.fontFamily = 'Arial, sans-serif';
    a.style.fontSize = '16px';
    a.style.borderRadius = '4px';

    // Add smooth transitions and underline effect
    a.style.transition = 'background-color 0.3s ease, border-bottom-color 0.3s ease';
    a.style.borderBottom = '2px solid transparent';

    // Add hover effects
    a.addEventListener('mouseover', () => {
        a.style.backgroundColor = '#555';
        a.style.borderBottomColor = '#fff';
    });
    a.addEventListener('mouseout', () => {
        a.style.backgroundColor = 'transparent';
        a.style.borderBottomColor = 'transparent';
    });

    // Add click event for smooth scrolling
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.getElementById(link.section);
        if (targetSection) {
            const navHeight = nav.offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });

    linksContainer.appendChild(a);
});

// Append brand and links container to nav, then to parent
nav.appendChild(brand);
nav.appendChild(linksContainer);
parent.appendChild(nav);

// Create hero section
const hero = document.createElement('section');
hero.id = 'hero';
hero.style.backgroundImage = 'linear-gradient(135deg, #90F7EC 10%, #32CCBC 100%)';
hero.style.height = '65vh';
hero.style.display = 'flex';
hero.style.flexDirection = 'column';
hero.style.justifyContent = 'center';
hero.style.padding = '100px 20px';
hero.style.textAlign = 'center';

const heroTitle = document.createElement('h1');
heroTitle.textContent = 'Welcome to MySite';
heroTitle.style.fontFamily = 'Georgia, serif';
heroTitle.style.fontSize = '48px';
heroTitle.style.marginBottom = '20px';

const heroSubtitle = document.createElement('p');
heroSubtitle.textContent = 'Explore our awesome content and get started today.';
heroSubtitle.style.fontFamily = 'Arial, sans-serif';
heroSubtitle.style.fontSize = '20px';
heroSubtitle.style.color = '#666';
heroSubtitle.style.marginBottom = '30px';

const btnContainer = document.createElement('div');
btnContainer.style.display = 'flex';
btnContainer.style.justifyContent = 'center';
btnContainer.style.gap = '20px';

['Get Started', 'Learn More'].forEach(text => {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.style.padding = '12px 24px';
    btn.style.fontSize = '16px';
    btn.style.borderRadius = '4px';
    btn.style.cursor = 'pointer';
    if (text === 'Get Started') {
        btn.style.backgroundColor = '#333';
        btn.style.color = '#fff';
        btn.style.border = 'none';
    } else {
        btn.style.backgroundColor = 'transparent';
        btn.style.color = '#333';
        btn.style.border = '2px solid #333';
    }
    // Button hover effect
    btn.addEventListener('mouseover', () => {
        btn.style.opacity = '0.8';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.opacity = '1';
    });
    // Button click action
    btn.addEventListener('click', () => {
        alert(text + ' clicked!');
    });
    btnContainer.appendChild(btn);
});

hero.appendChild(heroTitle);
hero.appendChild(heroSubtitle);
hero.appendChild(btnContainer);
parent.appendChild(hero);

// Create a simple info section
const infoSection = document.createElement('section');
infoSection.id = 'infoSection';
infoSection.style.padding = '60px 20px';
infoSection.style.backgroundImage = 'linear-gradient(135deg, #FAD7A1 10%, #E96D71 100%)';
infoSection.style.height = '75vh';
infoSection.style.display = 'flex';
infoSection.style.flexDirection = 'column';
infoSection.style.justifyContent = 'center';
infoSection.style.textAlign = 'center';

const infoTitle = document.createElement('h2');
infoTitle.textContent = 'About Us';
infoTitle.style.fontFamily = 'Georgia, serif';
infoTitle.style.fontSize = '32px';
infoTitle.style.marginBottom = '20px';

const infoText = document.createElement('p');
infoText.textContent = 'We are a dedicated team of professionals committed to delivering innovative solutions and exceptional experiences. Founded with a vision to transform the digital landscape, we combine creativity with cutting-edge technology to help businesses thrive in the modern world.';
infoText.style.fontFamily = 'Arial, sans-serif';
infoText.style.fontSize = '18px';
infoText.style.color = '#444';
infoText.style.lineHeight = '1.6';
infoText.style.maxWidth = '800px';
infoText.style.margin = '0 auto';

infoSection.appendChild(infoTitle);
infoSection.appendChild(infoText);

// Add feature cards
const featuresContainer = document.createElement('div');
featuresContainer.style.display = 'flex';
featuresContainer.style.justifyContent = 'center';
featuresContainer.style.gap = '20px';
featuresContainer.style.marginTop = '40px';

const features = [
    { icon: '�', title: 'Web Development', desc: 'Custom websites and web applications built with modern technologies.' },
    { icon: '�', title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications for iOS and Android.' },
    { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful, user-friendly designs that enhance user experience.' }
];

features.forEach(f => {
    const card = document.createElement('div');
    card.style.backgroundColor = '#f0f0f0';
    card.style.padding = '20px';
    card.style.borderRadius = '8px';
    card.style.flex = '1';
    card.style.textAlign = 'center';

    const icon = document.createElement('div');
    icon.textContent = f.icon;
    icon.style.fontSize = '40px';
    icon.style.marginBottom = '10px';

    const title = document.createElement('h3');
    title.textContent = f.title;
    title.style.fontFamily = 'Georgia, serif';
    title.style.fontSize = '24px';
    title.style.marginBottom = '10px';

    const desc = document.createElement('p');
    desc.textContent = f.desc;
    desc.style.fontFamily = 'Arial, sans-serif';
    desc.style.fontSize = '16px';
    desc.style.color = '#666';

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(desc);
    featuresContainer.appendChild(card);
});

infoSection.appendChild(featuresContainer);
parent.appendChild(infoSection);

// Create a full-screen section (100vh)
const fullSection = document.createElement('section');
fullSection.id = 'fullSection';
fullSection.style.height = '95vh';
fullSection.style.backgroundImage = 'linear-gradient(135deg, #FDEB71 10%, #F8D800 100%)';
fullSection.style.display = 'flex';
fullSection.style.flexDirection = 'column';
fullSection.style.justifyContent = 'center';
fullSection.style.alignItems = 'center';

const fullText = document.createElement('h2');
fullText.textContent = 'Our Services';
fullText.style.fontFamily = 'Georgia, serif';
fullText.style.fontSize = '36px';
fullText.style.color = '#333';

// Add services description
const servicesDesc = document.createElement('p');
servicesDesc.textContent = 'We offer comprehensive digital solutions to help your business grow';
servicesDesc.style.fontFamily = 'Arial, sans-serif';
servicesDesc.style.fontSize = '18px';
servicesDesc.style.color = '#555';
servicesDesc.style.marginTop = '20px';
servicesDesc.style.maxWidth = '600px';

fullSection.appendChild(fullText);
fullSection.appendChild(servicesDesc);
parent.appendChild(fullSection);

// Create contact us section
const contactSection = document.createElement('section');
contactSection.id = 'contactSection';
contactSection.style.minHeight = '100vh';
contactSection.style.backgroundImage = 'linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%)';
contactSection.style.display = 'flex';
contactSection.style.flexDirection = 'column';
contactSection.style.justifyContent = 'center';
contactSection.style.alignItems = 'center';
contactSection.style.padding = '80px 20px';
contactSection.style.textAlign = 'center';

const contactTitle = document.createElement('h2');
contactTitle.textContent = 'Contact Us';
contactTitle.style.fontFamily = 'Georgia, serif';
contactTitle.style.fontSize = '42px';
contactTitle.style.color = '#333';
contactTitle.style.marginBottom = '15px';
contactTitle.style.fontWeight = 'bold';

const contactSubtitle = document.createElement('p');
contactSubtitle.textContent = 'Get in touch with us. We would love to hear from you!';
contactSubtitle.style.fontFamily = 'Arial, sans-serif';
contactSubtitle.style.fontSize = '20px';
contactSubtitle.style.color = '#555';
contactSubtitle.style.marginBottom = '50px';
contactSubtitle.style.maxWidth = '600px';

// Main contact container
const contactMainContainer = document.createElement('div');
contactMainContainer.style.display = 'flex';
contactMainContainer.style.maxWidth = '1200px';
contactMainContainer.style.width = '100%';
contactMainContainer.style.gap = '50px';
contactMainContainer.style.alignItems = 'flex-start';
contactMainContainer.style.flexWrap = 'wrap';

// Left side - Contact info
const contactInfoSide = document.createElement('div');
contactInfoSide.style.flex = '1.5';
contactInfoSide.style.minWidth = '300px';

const contactInfoTitle = document.createElement('h3');
contactInfoTitle.textContent = 'Get In Touch';
contactInfoTitle.style.fontFamily = 'Georgia, serif';
contactInfoTitle.style.fontSize = '28px';
contactInfoTitle.style.color = '#333';
contactInfoTitle.style.marginBottom = '30px';
contactInfoTitle.style.textAlign = 'left';

// Contact info container
const contactInfo = document.createElement('div');
contactInfo.style.display = 'flex';
contactInfo.style.flexDirection = 'column';
contactInfo.style.gap = '25px';

const contactMethods = [
    { icon: '📧', title: 'Email Us', info: 'info@mysite.com', desc: 'Send us an email anytime!' },
    { icon: '📞', title: 'Call Us', info: '+1 (555) 123-4567', desc: 'Mon-Fri from 8am to 5pm.' },
    { icon: '📍', title: 'Visit Us', info: '123 Business St, City, State 12345', desc: 'Come and say hello!' }
];

contactMethods.forEach(method => {
    const methodDiv = document.createElement('div');
    methodDiv.style.display = 'flex';
    methodDiv.style.alignItems = 'flex-start';
    methodDiv.style.backgroundColor = 'rgba(255,255,255,0.9)';
    methodDiv.style.padding = '25px';
    methodDiv.style.borderRadius = '15px';
    methodDiv.style.textAlign = 'left';
    methodDiv.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    methodDiv.style.transition = 'transform 0.3s ease';

    methodDiv.addEventListener('mouseover', () => {
        methodDiv.style.transform = 'translateY(-5px)';
    });
    methodDiv.addEventListener('mouseout', () => {
        methodDiv.style.transform = 'translateY(0)';
    });

    const iconDiv = document.createElement('div');
    iconDiv.textContent = method.icon;
    iconDiv.style.fontSize = '35px';
    iconDiv.style.marginRight = '20px';
    iconDiv.style.marginTop = '5px';

    const contentDiv = document.createElement('div');
    contentDiv.style.display = 'flex';
    contentDiv.style.flexDirection = 'column';
    contentDiv.style.alignItems = 'flex-start';
    contentDiv.style.justifyItems = 'flex-start';

    const title = document.createElement('h4');
    title.textContent = method.title;
    title.style.fontFamily = 'Georgia, serif';
    title.style.fontSize = '20px';
    title.style.marginBottom = '8px';
    title.style.color = '#333';
    title.style.fontWeight = 'bold';

    const info = document.createElement('p');
    info.textContent = method.info;
    info.style.fontFamily = 'Arial, sans-serif';
    info.style.fontSize = '16px';
    info.style.color = '#444';
    info.style.margin = '0 0 5px 0';
    info.style.fontWeight = '600';

    const desc = document.createElement('p');
    desc.textContent = method.desc;
    desc.style.fontFamily = 'Arial, sans-serif';
    desc.style.fontSize = '14px';
    desc.style.color = '#666';
    desc.style.margin = '0';

    contentDiv.appendChild(title);
    contentDiv.appendChild(info);
    contentDiv.appendChild(desc);

    methodDiv.appendChild(iconDiv);
    methodDiv.appendChild(contentDiv);
    contactInfo.appendChild(methodDiv);
});

contactInfoSide.appendChild(contactInfoTitle);
contactInfoSide.appendChild(contactInfo);

// Right side - Contact form
const contactFormContainer = document.createElement('div');
contactFormContainer.style.flex = '1';
contactFormContainer.style.minWidth = '350px';
contactFormContainer.style.backgroundColor = 'rgba(255,255,255,0.95)';
contactFormContainer.style.padding = '40px';
contactFormContainer.style.borderRadius = '20px';
contactFormContainer.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';

const contactForm = document.createElement('form');
contactForm.style.width = '100%';

const formTitle = document.createElement('h3');
formTitle.textContent = 'Send us a Message';
formTitle.style.fontFamily = 'Georgia, serif';
formTitle.style.fontSize = '28px';
formTitle.style.color = '#333';
formTitle.style.marginBottom = '30px';
formTitle.style.textAlign = 'left';

// Name input
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Your Full Name';
nameInput.required = true;
nameInput.style.width = '100%';
nameInput.style.padding = '15px';
nameInput.style.marginBottom = '20px';
nameInput.style.border = '2px solid #e0e0e0';
nameInput.style.borderRadius = '10px';
nameInput.style.fontSize = '16px';
nameInput.style.fontFamily = 'Arial, sans-serif';
nameInput.style.transition = 'border-color 0.3s ease';
nameInput.style.boxSizing = 'border-box';

nameInput.addEventListener('focus', () => {
    nameInput.style.borderColor = '#667eea';
    nameInput.style.outline = 'none';
});
nameInput.addEventListener('blur', () => {
    nameInput.style.borderColor = '#e0e0e0';
});

// Email input
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'Your Email Address';
emailInput.required = true;
emailInput.style.width = '100%';
emailInput.style.padding = '15px';
emailInput.style.marginBottom = '20px';
emailInput.style.border = '2px solid #e0e0e0';
emailInput.style.borderRadius = '10px';
emailInput.style.fontSize = '16px';
emailInput.style.fontFamily = 'Arial, sans-serif';
emailInput.style.transition = 'border-color 0.3s ease';
emailInput.style.boxSizing = 'border-box';

emailInput.addEventListener('focus', () => {
    emailInput.style.borderColor = '#667eea';
    emailInput.style.outline = 'none';
});
emailInput.addEventListener('blur', () => {
    emailInput.style.borderColor = '#e0e0e0';
});

// Subject input
const subjectInput = document.createElement('input');
subjectInput.type = 'text';
subjectInput.placeholder = 'Subject';
subjectInput.required = true;
subjectInput.style.width = '100%';
subjectInput.style.padding = '15px';
subjectInput.style.marginBottom = '20px';
subjectInput.style.border = '2px solid #e0e0e0';
subjectInput.style.borderRadius = '10px';
subjectInput.style.fontSize = '16px';
subjectInput.style.fontFamily = 'Arial, sans-serif';
subjectInput.style.transition = 'border-color 0.3s ease';
subjectInput.style.boxSizing = 'border-box';

subjectInput.addEventListener('focus', () => {
    subjectInput.style.borderColor = '#667eea';
    subjectInput.style.outline = 'none';
});
subjectInput.addEventListener('blur', () => {
    subjectInput.style.borderColor = '#e0e0e0';
});

// Message textarea
const messageInput = document.createElement('textarea');
messageInput.placeholder = 'Your Message...';
messageInput.required = true;
messageInput.rows = 6;
messageInput.style.width = '100%';
messageInput.style.padding = '15px';
messageInput.style.marginBottom = '30px';
messageInput.style.border = '2px solid #e0e0e0';
messageInput.style.borderRadius = '10px';
messageInput.style.fontSize = '16px';
messageInput.style.fontFamily = 'Arial, sans-serif';
messageInput.style.resize = 'vertical';
messageInput.style.transition = 'border-color 0.3s ease';
messageInput.style.boxSizing = 'border-box';

messageInput.addEventListener('focus', () => {
    messageInput.style.borderColor = '#667eea';
    messageInput.style.outline = 'none';
});
messageInput.addEventListener('blur', () => {
    messageInput.style.borderColor = '#e0e0e0';
});

// Submit button
const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.textContent = 'Send Message';
submitBtn.style.width = '100%';
submitBtn.style.padding = '15px';
submitBtn.style.fontSize = '18px';
submitBtn.style.backgroundColor = '#667eea';
submitBtn.style.color = '#fff';
submitBtn.style.border = 'none';
submitBtn.style.borderRadius = '10px';
submitBtn.style.cursor = 'pointer';
submitBtn.style.fontWeight = 'bold';
submitBtn.style.transition = 'background-color 0.3s ease, transform 0.2s ease';

submitBtn.addEventListener('mouseover', () => {
    submitBtn.style.backgroundColor = '#5a67d8';
    submitBtn.style.transform = 'translateY(-2px)';
});
submitBtn.addEventListener('mouseout', () => {
    submitBtn.style.backgroundColor = '#667eea';
    submitBtn.style.transform = 'translateY(0)';
});

// Form submit handler
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (nameInput.value && emailInput.value && subjectInput.value && messageInput.value) {
        alert('Thank you for your message! We will get back to you soon.');
        nameInput.value = '';
        emailInput.value = '';
        subjectInput.value = '';
        messageInput.value = '';
    } else {
        alert('Please fill in all fields.');
    }
});

contactForm.appendChild(formTitle);
contactForm.appendChild(nameInput);
contactForm.appendChild(emailInput);
contactForm.appendChild(subjectInput);
contactForm.appendChild(messageInput);
contactForm.appendChild(submitBtn);

contactFormContainer.appendChild(contactForm);

contactMainContainer.appendChild(contactInfoSide);
contactMainContainer.appendChild(contactFormContainer);

contactSection.appendChild(contactTitle);
contactSection.appendChild(contactSubtitle);
contactSection.appendChild(contactMainContainer);
parent.appendChild(contactSection);

// Create modern footer section
const footer = document.createElement('footer');
footer.id = 'footer';
footer.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
footer.style.color = '#fff';
footer.style.padding = '40px 20px';
footer.style.textAlign = 'center';
footer.style.fontFamily = 'Arial, sans-serif';

// Footer content container
const footerContent = document.createElement('div');
footerContent.style.maxWidth = '1200px';
footerContent.style.margin = '0 auto';

// Footer links
const footerLinks = document.createElement('div');
footerLinks.style.marginBottom = '20px';
footerLinks.style.display = 'flex';
footerLinks.style.justifyContent = 'center';
footerLinks.style.gap = '30px';
footerLinks.style.flexWrap = 'wrap';

['Privacy Policy', 'Terms of Service', 'About Us', 'Contact'].forEach(linkText => {
    const link = document.createElement('a');
    link.textContent = linkText;
    link.href = '#';
    link.style.color = '#fff';
    link.style.textDecoration = 'none';
    link.style.fontSize = '14px';
    link.style.transition = 'opacity 0.3s ease';

    link.addEventListener('mouseover', () => {
        link.style.opacity = '0.7';
    });
    link.addEventListener('mouseout', () => {
        link.style.opacity = '1';
    });

    footerLinks.appendChild(link);
});

// Copyright text
const footerText = document.createElement('p');
footerText.textContent = '© 2025 MySite. All rights reserved. Made with ❤️';
footerText.style.margin = '0';
footerText.style.fontSize = '14px';
footerText.style.opacity = '0.8';

footerContent.appendChild(footerLinks);
footerContent.appendChild(footerText);
footer.appendChild(footerContent);
parent.appendChild(footer);