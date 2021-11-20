export type GeocodeResult = {
    formatted_address: string;
    place_id: string;
    geometry: {
        location: { lat: number, lng: number }
    }
};

export default [
    {
        formatted_address: `Marienplatz, 80331 München`,
        geometry: {
            location: {
                lat: 48.1373932,
                lng: 11.5754485
            }
        }
    },
    {
        formatted_address: "Münchner Freiheit, 80802 München, Germany",
        geometry: {
            location: {
                lat: 48.1632179,
                lng: 11.5869325
            }
        },
        place_id: "ChIJi2hSaLh1nkcRBKuSCD7weGI",
    },
    {
        formatted_address: "Ostbahnhof, 81667 München, Germany",
        geometry: {
            location: {
                lat: 48.12744,
                lng: 11.604971
            },
        },
        place_id: "ChIJ1Xmnu4bfnUcRC5RfpHf-e0M"
    }
] as GeocodeResult[];