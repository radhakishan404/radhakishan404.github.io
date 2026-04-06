import { useEffect, useState } from "react";

const excludedRepos = new Set([
    "radhakishan404.github.io",
    "radhakishan404",
    "react-native-stylish-accordion-import"
]);

function usePublicRepos() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        async function loadRepos() {
            try {
                const response = await fetch("https://api.github.com/users/radhakishan404/repos?per_page=100&sort=updated");
                const data = await response.json();

                if (!Array.isArray(data) || !isMounted) {
                    return;
                }

                const nextRepos = data
                    .filter((repo) => !repo.fork && !repo.archived && !excludedRepos.has(repo.name))
                    .filter((repo) => repo.description || repo.homepage || repo.stargazers_count > 0)
                    .sort((a, b) => {
                        const scoreA = (a.stargazers_count * 5) + (a.homepage ? 2 : 0);
                        const scoreB = (b.stargazers_count * 5) + (b.homepage ? 2 : 0);

                        if (scoreA !== scoreB) {
                            return scoreB - scoreA;
                        }

                        return new Date(b.updated_at) - new Date(a.updated_at);
                    })
                    .slice(0, 6);

                setRepos(nextRepos);
            } catch (error) {
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        loadRepos();

        return () => {
            isMounted = false;
        };
    }, []);

    return { repos, loading };
}

export default usePublicRepos;
