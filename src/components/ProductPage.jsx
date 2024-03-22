import React, { useState } from 'react';

const PhotoSlider = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const photos = [
        'https://smarternutrition.com/cdn/shop/products/smarter-curcumin-banner-d.04.png',
        'https://smarternutrition.com/cdn/shop/products/SN_Curcumin_D.04_SupFacts.jpg'
    ];

    const handlePhotoClick = (index) => setSelectedIndex(index);

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '20%' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {photos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            alt="Photo"
                            style={{ width: '100%', cursor: 'pointer' }}
                            onClick={() => handlePhotoClick(index)}
                        />
                    ))}
                </div>
            </div>
            <div style={{ width: '200px' }}>
                <img
                    src={photos[selectedIndex]}
                    alt="Selected Photo"
                    style={{ width: '100%' }}
                />
            </div>
        </div>
    );
};

export default PhotoSlider;
