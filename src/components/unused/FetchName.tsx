import React, { useEffect, useState } from "react";
import s from '../../stores/styling'

interface FetchNameProps {
    onNamesFetch: (names: string[]) => void;
}

const FetchName: React.FC<FetchNameProps> = ({ onNamesFetch }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const GenerateName = async () => {
            try {
                const response = await fetch(
                    `https://api.api-ninjas.com/v1/babynames?gender=neutral`,
                    {
                        method: 'GET',
                        headers: {
                            'X-Api-Key': 'jYO2Qu5q6ngXgu88oecooQ==UX6Yl5C7PunIvP3A',
                            'Content-Type': 'application/json'
                        }
                    }
                );
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result: string[] = await response.json();
                onNamesFetch(result); // 이름 배열을 상위 컴포넌트로 전달
                setLoading(false);

            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };
        GenerateName();
    }, [onNamesFetch]);

    return (
        <s.ArticleDiv className="article-name">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <p>Names fetched successfully.</p>
            )}
        </s.ArticleDiv>
    );
}

export default FetchName;
