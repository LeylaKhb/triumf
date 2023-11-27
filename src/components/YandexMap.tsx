import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import "../styles/App.css"

const YandexMap: React.FC<{}> = () => {

    return (
        <div>
            <YMaps>
                <Map
                    defaultState={{
                        center: [55.795580, 49.129815],
                        zoom: 16,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl", 'geoObject.addon.balloon']}
                    width={'100%'}
                    height={360}
                >
                    <Placemark
                        defaultGeometry={[55.795580, 49.129815]}
                        options={{
                        }}
                        properties={{
                            hintContent: '<b> Я появляюсь при наведении на метку </b>',
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    )
};

export default YandexMap;
