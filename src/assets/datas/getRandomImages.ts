// src/utils/imageUtils.ts

const images: string[] = [];

// 이미지 배열 채우기
for (let i = 1; i <= 70; i++) {
    const imageName = `tattoo_${String(i).padStart(2, '0')}.jpg`;
    images.push(require(`../images/${imageName}`));
}

// 랜덤 이미지를 선택하는 함수
export function getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}
