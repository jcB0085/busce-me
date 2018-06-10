import React from 'react';

const FaceBox = ({topRow,rightCol, bottomRow, leftCol}) => {
    return (
        <div className='box-you' style={{
            top: topRow, 
            right: rightCol, 
            bottom: bottomRow, 
            left: leftCol
            }}>
        </div>
    );
}

export default FaceBox;