import axios from 'axios';
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import './PlaceList.css'

function PlaceList() {
    const [data, setdata] = useState([]);
    let open = [];
    let close = []

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let dayy = days[d.getDay()];

    const [timeopen, settimeopen] = useState([])
    const [timeclose, settimeclose] = useState([])

    function get_data() {
        axios.get('http://localhost:3000/data/')
            .then(response => {
                setdata(response.data);
            });


    }
    useEffect(() => {
        get_data();
        settimeopen((open));
        settimeclose((close));

    }, []);

    useEffect(() => {
        data.map(data => {
            let dd = data.operation_time;
            // console.log("day : ",dd);
            dd.forEach((e) => {
                if (e.day == dayy) {
                    // console.log("e : ", e.day, ":", e.time_open, "-", e.time_close);
                    open.push(e.time_open);
                    close.push(e.time_close);


                }
            });

        });
    }, [])

    return (
        <div className="grid">

            {data.map((data, index) => (
                <div className="grid-card">
                    <Card key={data.id} >
                        <CardHeader
                            avatar={<div style={{ marginTop: "-4px" }}><Avatar src={data.profile_image_url} variant="rounded" /></div>

                            }
                            title={<div style={{ marginTop: '12px' }}>{data.name}</div>
                            }
                            subheader={
                                <div className='subhearder'>
                                    <div style={{ marginTop: '2px' }}><CalendarMonthIcon /></div>
                                    <div style={{ marginTop: '4px' }} className="detail">
                                        {timeopen[index] === 'closed' && <p style={{ marginTop: '3px' }} key={index}>{timeopen[index]}</p>}
                                        {timeopen[index] !== 'closed' && <p style={{ marginTop: '3px' }} key={index}>{timeopen[index]} - {timeclose[index]}</p>}
                                        
                                    </div>
                                    <div className="rating">
                                        <FiberManualRecordIcon />
                                        <p style={{ margin: '2px 0px 0px 2px' }}>{data.rating}</p>
                                    </div>
                                </div>
                            }

                        />
                        <div className='card-img'>

                            <img src={data.images[0]} alt="" />
                            <img src={data.images[1]} alt="" />
                            <img src={data.images[2]} alt="" />

                        </div>


                    </Card>
                </div>

            )
            )}

        </div>
        // <></>
    )
}
export default PlaceList;