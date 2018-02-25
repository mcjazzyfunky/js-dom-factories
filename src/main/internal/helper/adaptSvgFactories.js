const svgTagNames = `
    a altGlyph altGlyphDef altGlyphItem animate animateColor animateMotion
    animateTransform circle clipPath color-profile cursor defs desc ellipse
    feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix
    feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA
    feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode
    feMorphology feOffset fePointLight feSpecularLighting feSpotLight
    feTile feTurbulence filter font font-face font-face-format
    font-face-name font-face-src font-face-uri foreignObject g glyph
    glyphRef hkern image line linearGradient marker mask metadata
    missing-glyph mpath path pattern polygon polyline radialGradient rect
    script set stop style svg switch symbol text textPath title tref tspan
    use view vkern`;

export default function adaptSvgfactories(createElement) { 
    const
        ret = {},
        svgTags = svgTagNames.trim().split(/\s+/);

    for (let i = 0; i < svgTags.length; ++i) {
        const tag = svgTags[i];

        ret[tag] = createElement.bind(null, tag);
    }

    return ret;
}
