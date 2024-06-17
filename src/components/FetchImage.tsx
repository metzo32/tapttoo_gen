import React, { useEffect, useState } from "react";
import s from "../stores/styling";

const UNSPLASH_ACCESS_KEY = "XujrP5hodbBZD11rOmji4kOzjKDzPl5AdeRpG8VPrPQ";

const fetchImages = async (count: number) => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?count=${count}&client_id=${UNSPLASH_ACCESS_KEY}`
  );
  const data = await response.json();
  return data.map((image: any) => image.urls.small);
};

function FetchImages() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageResults = await fetchImages(1);
        if (imageResults.length > 0) {
          setImage(imageResults[0]);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <>
      {loading ? (
        <s.ArticleDiv className="article-grid-image">Loading...</s.ArticleDiv>
      ) : (
        <s.ArticleDiv className="article-grid-image">
          {image && <img src={image} alt="Random from Unsplash" />}
        </s.ArticleDiv>
      )}
    </>
  );
}

export default FetchImages;
