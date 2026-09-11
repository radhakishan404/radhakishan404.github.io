import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyPageMetadata, getPageMetadata } from "../../seo";

export default function Seo() {
    const { pathname } = useLocation();
    useEffect(() => applyPageMetadata(document, getPageMetadata(pathname)), [pathname]);
    return null;
}
