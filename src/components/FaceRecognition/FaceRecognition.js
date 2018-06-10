import React from 'react';
import FaceBox from '../FaceBox/FaceBox';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='input-image' src={imageUrl} width='700px' height='auto' alt='Recognizing this' />
                {
                    box.map((faceMapped,i) => {
                        // console.log(box[i]);
                        return (
                            <FaceBox
                                key={i}
                                leftCol={box[i].leftCol}
                                topRow={box[i].topRow}
                                rightCol={box[i].rightCol}
                                bottomRow={box[i].bottomRow}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default FaceRecognition;