import React, { useState } from 'react';

const PhotoSlider = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(0);
    const photos = [
        'https://smarternutrition.com/cdn/shop/products/smarter-curcumin-banner-d.04.png',
        'https://smarternutrition.com/cdn/shop/products/SN_Curcumin_D.04_SupFacts.jpg'
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
