import React, { useCallback, useEffect, useRef, useState } from "react";
import useDocumentMeta from "../hooks/useDocumentMeta";

const IG_POST = "https://www.instagram.com/p/DZJ0QrHAQa1/";
const IG_PROFILE = "https://www.instagram.com/rk.codex";

const prompts = [
    {
        id: 1,
        image: "/unique-prompts/prompt-1.jpg",
        title: "Soul Energy Explosion",
        prompt: `A male silhouette matching the reference face (height: ... cm, weight: ... kg), wearing stylish contemporary clothing. Parts of his body dissolve into a dynamic explosion of colorful smoke, autumn leaves, and abstract particles. This "soul energy" trail follows the colors of his outfit — vibrant orange, teal, and earthy brown — bursting outward from his back and legs. A small dark bird silhouette is seen flying away from the smoke trail, reinforcing the theme of freedom and liberation.

Background & Lighting:
A minimalist split-tone background, featuring soft grayish-blue on the left side and a bold deep orange on the right side. Soft cinematic lighting highlights the texture of the clothing and enhances the ethereal quality of the smoke and particles.

Technical Style:
Ultra-realistic surrealism, 8K resolution, high-fashion editorial aesthetic. The composition must maintain sharp focus on the man's face and clothing, while the trailing smoke, leaves, and abstract particles behind him feature fluid painterly motion blur.

Key Visual Elements:
Color palette: Strong contrast between warm orange and cool teal tones.
Composition: Low-angle camera perspective with a dynamic floating pose in mid-air, making the subject appear powerful, dominant, and free.
Theme: High-fashion editorial photography meets conceptual digital art.
Highly detailed fabric textures, volumetric smoke, realistic lighting, premium magazine-quality image.
Aspect ratio: 9:16 vertical.`
    },
    {
        id: 2,
        image: "/unique-prompts/prompt-2.jpg",
        title: "Fire & Smoke Vortex",
        prompt: `Ultra-realistic full-body studio portrait of a rugged, powerful man (height: ... cm, weight: ... kg), standing confidently and radiating a strong presence against a stark pure white background. He wears an epic layered outfit consisting of a heavy charcoal-gray trench coat with distressed textured details, paired with a dark knitted sweater, a thick wool scarf, a deep black beanie, and brown tactical boots. His facial expression is sharp, stoic, and determined.

Visual Effects:
His body silhouette dramatically merges with a dynamic vortex of ethereal orange flames and cool bluish smoke, rendered in a highly fluid and artistic double-exposure watercolor style. The swirling energy appears to flow naturally from and around his body, creating a powerful fusion of realism and abstract art.

Add stunning rim lighting to emphasize the edges of his silhouette, volumetric lighting within the smoke and fire vortex, and cinematic depth throughout the composition. Ensure the background remains completely clean and pure white with no additional characters or objects.

Style & Quality:
Ultra-realistic, cinematic masterpiece, high-fashion editorial photography, dramatic studio lighting, intricate fabric textures, detailed smoke and flame simulations, sharp focus, premium visual storytelling, 8K ultra-high resolution, hyper-detailed, award-winning digital art.

Aspect Ratio: 9:16 vertical.`
    },
    {
        id: 3,
        image: "/unique-prompts/prompt-3.jpg",
        title: "Vintage Motorcycle Rider",
        prompt: `A cinematic, ultra-realistic, high-fashion low-angle action portrait of a man whose face perfectly matches the reference photo, riding a vintage motorcycle at high speed directly toward the camera.

The rider is positioned in a realistic racing posture, leaning forward naturally over the fuel tank. His chest is lowered close to the motorcycle, shoulders slightly hunched forward, elbows bent outward, and neck aligned anatomically with the spine. His head is slightly lowered and pushed forward in a natural riding position, maintaining realistic human proportions. No elongated neck, no floating head effect, no distorted anatomy, no exaggerated shoulder-to-neck distance.

The camera is mounted just above the motorcycle headlight, creating an authentic rider's-eye cinematic perspective. The face remains proportionally connected to the shoulders with correct neck thickness and realistic muscle structure.

His intense eyes look directly toward the road ahead, with a determined expression. Dark windblown hair, realistic skin texture, detailed facial hair, sharp jawline.

He wears a fitted premium black leather biker jacket with silver zippers, black leather gloves, dark riding pants, and boots.

The vintage cafe racer motorcycle features realistic chrome handlebars, polished metal components, detailed engine parts, and a glowing headlight.

Golden hour sunlight, dramatic rim lighting around the rider, volumetric sun rays, realistic lens flare, cinematic shadows, shallow depth of field.

Strong motion blur only on the road, background, wheels, and surroundings while the rider's face, neck, shoulders, hands, and motorcycle controls remain perfectly sharp and in focus.

Photorealistic 8K, hyper-detailed, realistic anatomy, natural body proportions, magazine-quality automotive photography, cinematic color grading, award-winning action portrait.

Aspect ratio 9:16.`
    },
    {
        id: 4,
        image: "/unique-prompts/prompt-4.jpg",
        title: "Post-Apocalyptic Walker",
        prompt: `Potret editorial high-fashion seluruh tubuh pria sesuai foto referensi (tinggi ...cm, berat badan .....kg) yang ultra-realistis. berjalan dengan penuh dominasi dan percaya diri langsung ke arah kamera. la mengenakan streetwear pasca-apokaliptik berlapis yang oversized, menampilkan trench coat teal bertekstur elegant, syal tebal bermotif rumit, celana kargo, dan sepatu bot militer tangguh dengan tali oranye menyala.

Penampilannya semakin tajam dengan kacamata hitam futuristik berlensa biru. Di belakangnya menjulang matahari bundar solid berwarna oranye cerah yang sangat besar sebagai latar utama.

Efek Visual: Terapkan rim lighting yang dramatis untuk menonjolkan siluet tubuhnya terhadap matahari, pencahayaan volumetric yang epik, kontras warna sinematik tingkat tinggi (antara teal dan oranye), dan render dalam resolusi 8K super detail dengan komposisi bersih tanpa karakter latar belakang (no background characters). rasio 9:16`
    }
];

function HeartIcon({ filled }) {
    return filled ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#ed4956"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    );
}

function CommentIcon() {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
}

function ShareIcon() {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
}

function BookmarkIcon() {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>;
}

function UniquePromptsPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [liked, setLiked] = useState(false);
    const [copied, setCopied] = useState(false);
    const sliderRef = useRef(null);
    const touchStartRef = useRef(0);

    useDocumentMeta({
        title: "Unique Prompts — AI Profile Photo Transformations | rk.codex",
        description: "Copy the exact prompts used to create stunning AI-generated profile photo transformations. Free prompts for ChatGPT image generation.",
        type: "website"
    });

    const goTo = useCallback((idx) => {
        const clamped = Math.max(0, Math.min(prompts.length - 1, idx));
        setActiveIndex(clamped);
        setCopied(false);
    }, []);

    const handleTouchStart = (e) => { touchStartRef.current = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
        const diff = touchStartRef.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) goTo(activeIndex + (diff > 0 ? 1 : -1));
    };

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "ArrowLeft") goTo(activeIndex - 1);
            if (e.key === "ArrowRight") goTo(activeIndex + 1);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [activeIndex, goTo]);

    const redirectToIG = (e) => {
        e.preventDefault();
        window.open(IG_POST, "_blank");
    };

    const copyPrompt = () => {
        navigator.clipboard.writeText(prompts[activeIndex].prompt).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    };

    const current = prompts[activeIndex];

    return (
        <div className="up-page">
            <div className="up-header">
                <a href={IG_PROFILE} target="_blank" rel="noreferrer" className="up-brand">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    <span>rk.codex</span>
                </a>
                <a href={IG_POST} target="_blank" rel="noreferrer" className="up-follow-btn">View on Instagram</a>
            </div>

            <div className="up-layout">
                <div className="up-post-card">
                    <div className="up-post-header">
                        <a href={IG_PROFILE} target="_blank" rel="noreferrer" className="up-avatar-row">
                            <div className="up-avatar-ring">
                                <img src="/rk-images/leaning-smile-black-suit.png" alt="rk.codex" className="up-avatar" />
                            </div>
                            <div>
                                <div className="up-username">rk.codex <svg width="14" height="14" viewBox="0 0 24 24" fill="#3897f0"><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/></svg></div>
                                <div className="up-location">Unique Prompts Collection</div>
                            </div>
                        </a>
                        <button className="up-more" onClick={redirectToIG}>•••</button>
                    </div>

                    <div
                        className="up-image-slider"
                        ref={sliderRef}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="up-slider-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                            {prompts.map((p) => (
                                <div className="up-slide" key={p.id}>
                                    <img src={p.image} alt={p.title} draggable="false" />
                                </div>
                            ))}
                        </div>
                        {activeIndex > 0 && (
                            <button className="up-arrow up-arrow-left" onClick={() => goTo(activeIndex - 1)}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="15 18 9 12 15 6"/></svg>
                            </button>
                        )}
                        {activeIndex < prompts.length - 1 && (
                            <button className="up-arrow up-arrow-right" onClick={() => goTo(activeIndex + 1)}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="9 18 15 12 9 6"/></svg>
                            </button>
                        )}
                        <div className="up-dots">
                            {prompts.map((_, i) => (
                                <button key={i} className={`up-dot${i === activeIndex ? " active" : ""}`} onClick={() => goTo(i)} />
                            ))}
                        </div>
                        <div className="up-slide-counter">{activeIndex + 1}/{prompts.length}</div>
                    </div>

                    <div className="up-actions">
                        <div className="up-actions-left">
                            <button onClick={(e) => { setLiked(!liked); if (!liked) redirectToIG(e); }} className="up-action-btn">
                                <HeartIcon filled={liked} />
                            </button>
                            <button onClick={redirectToIG} className="up-action-btn"><CommentIcon /></button>
                            <button onClick={redirectToIG} className="up-action-btn"><ShareIcon /></button>
                        </div>
                        <button onClick={redirectToIG} className="up-action-btn"><BookmarkIcon /></button>
                    </div>

                    <div className="up-likes" onClick={redirectToIG}>
                        <strong>1,247 likes</strong>
                    </div>
                    <div className="up-caption">
                        <a href={IG_PROFILE} target="_blank" rel="noreferrer" className="up-cap-user">rk.codex</a>
                        <span> Make your profile photo look 10X more amazing with these prompts ✨🔥</span>
                    </div>
                    <div className="up-view-comments" onClick={redirectToIG}>View all comments on Instagram →</div>
                </div>

                <div className="up-prompt-panel">
                    <div className="up-panel-header">
                        <div className="up-panel-tabs">
                            {prompts.map((p, i) => (
                                <button key={p.id} className={`up-tab${i === activeIndex ? " active" : ""}`} onClick={() => goTo(i)}>
                                    Prompt {p.id}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="up-panel-title">
                        <span className="up-panel-num">#{current.id}</span>
                        {current.title}
                    </div>
                    <div className="up-panel-prompt">{current.prompt}</div>
                    <button className={`up-copy-btn${copied ? " copied" : ""}`} onClick={copyPrompt}>
                        {copied ? "✓ Copied to Clipboard!" : "Copy Prompt"}
                    </button>
                    <div className="up-panel-tip">
                        <strong>💡 Tip:</strong> Replace "height" and "weight" with your actual measurements. Upload a clear reference photo of your face for best results.
                    </div>
                </div>
            </div>

            <div className="up-more-section">
                <h2>More Prompt Collections Coming Soon</h2>
                <p>Follow <a href={IG_PROFILE} target="_blank" rel="noreferrer">@rk.codex</a> on Instagram for new prompt drops every week.</p>
                <div className="up-more-ctas">
                    <a href={IG_PROFILE} target="_blank" rel="noreferrer" className="up-cta-btn up-cta-ig">Follow on Instagram</a>
                    <a href="https://www.youtube.com/@rk-codex" target="_blank" rel="noreferrer" className="up-cta-btn up-cta-yt">Subscribe on YouTube</a>
                </div>
            </div>
        </div>
    );
}

export default UniquePromptsPage;
