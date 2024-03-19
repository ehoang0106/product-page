import React, { useState } from 'react';

const PhotoSlider = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(0);
    const photos = [
        'https://smarternutrition.com/cdn/shop/products/smarter-curcumin-banner-d.04.png?v=1644620182&width=400',
        'https://smarternutrition.com/cdn/shop/files/SN-CreatinePowder-30servings-Tub-Front.png?v=1708613662&width=200',
        'https://smarternutrition.com/cdn/shop/products/smVitaminImg2.png?v=1629929225&width=400',
        'https://smarternutrition.com/cdn/shop/products/Sleep-with-ingredients-new_ae7e2157-a485-49ef-9d32-9251cee46bd4.png?v=1629928593&width=400',
        'photo5.jpg',
    ];

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '20%' }}>
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        style={{ width: '100%', cursor: 'pointer' }}
                        onClick={() => setSelectedPhoto(index)}
                    />
                ))}
            </div>
            <div style={{ width: '200px' }}>
                <img
                    src={photos[selectedPhoto]}
                    alt={`Selected Photo ${selectedPhoto + 1}`}
                    style={{ width: '500px' }}
                />
            </div>
        </div>
    );
};

export default PhotoSlider;
