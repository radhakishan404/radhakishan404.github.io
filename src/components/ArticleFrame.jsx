import React from "react";

function ArticleFrame({ html, title }) {
    return (
        <iframe
            className="article-detail-frame"
            title={title}
            srcDoc={html}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
    );
}

export default ArticleFrame;
