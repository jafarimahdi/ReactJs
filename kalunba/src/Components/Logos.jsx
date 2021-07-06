export default function Logos() {
    const logos = [
        { pic: "pictures/kalunba/logo-rbg.png" },
        { pic: "pictures/kalunba/scottishmission.jpg" },
        { pic: "pictures/kalunba/reformatus.png" },
    ];
    return (
            <div className="container py-4 ">
                <div className="row text-center">
                    {logos.map((item) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-auto p-3 ">
                            <img
                                className="mx-auto "
                                src={item.pic}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
    );
}
