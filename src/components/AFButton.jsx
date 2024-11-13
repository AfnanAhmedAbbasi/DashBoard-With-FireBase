import { Button } from 'antd';
import React from 'react'
import '../pages/pages.css'

const AFButton = (props) => {
    const { lable, onClick, disabled, loading  ,width} = props;
    return (
        <>
            <div>
                <Button
                    type='primary'
                    onClick={onClick}
                    disabled={disabled}
                    loading={loading}
                    className='btn w-[8vw]'
                    style={{
                        backgroundColor:'rgb(44,44,44)', 
                        borderColor: 'rgb(44,44,44)',
                    }}
                >
                    {lable}
                </Button>
            </div>
        </>
    )
}

export default AFButton
