import React from 'react';
import photo1 from './1.png';

const FaceBox = ({topRow,rightCol, bottomRow, leftCol}) => {
    return (
        <div className='box-you' style={{
            top: topRow, 
            right: rightCol, 
            bottom: bottomRow, 
            left: leftCol
            }}>
            <img style={{ overflow: 'hidden', height: '100%' }} alt='buscemonster' src={photo1}/>
        </div>
    );
}

export default FaceBox;