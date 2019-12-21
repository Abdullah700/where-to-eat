import {useEffect, useState} from 'react';
import {Coordination} from "interfaces/Coordination";
// PS: ill use it if i need to get the the location on init of the any components
export default () => {
    const [cords, setCords] = useState<Coordination | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(position => {
                setCords({longitude: position.coords.longitude, latitude: position.coords.latitude})
            },
            err => setErrorMessage(err.message));
    }, []);

    return [cords, errorMessage];
};
