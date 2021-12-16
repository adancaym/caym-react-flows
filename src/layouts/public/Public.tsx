import { Outlet } from "react-router-dom";

import { Navigation } from "../../components/Nav/Navigation";
import { router } from "../../router";

export const Public = () => {

    const links = router.filter(e => e.scope === 'public').map(e => e.children).reduce((a, b) => a?.concat(b ? b : []))


    return (
        <>
            {links && <Navigation links={links} />}
            <div className="bg">
                <div className="public">
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>

        </>
    )


}

export default Public;