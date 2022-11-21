export default function SUpportCard({icon, title, subTitle}){
    return(
        <>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex align-items-center">
                    <div className="me-3"><i className={icon}></i></div>
                    <div>
                        <h4><b>{title}</b></h4>
                        <p>{subTitle}</p>
                    </div>
                </div>
            </div>
        </>
    )
}