import Drawer from "./Components/Drawer";
import ContactMe from "./Components/MainContents/ContactMe";
import Introduce from "./Components/MainContents/Introduce";
import ProjectsList from "./Components/MainContents/ProjectsList";
import Skills from "./Components/MainContents/Skills";
import Navigation from "./Components/Navigation";
import Profile from "./Components/Profile";

const Root = () => {
    return (
        <div className="pl-5 pr-5 mx-auto">
            <div className="mt-5 flex flex-col lg:flex-row gap-3">
                {/* profile */}
                <div className="lg:w-80">
                    <div className="lg:w-80 lg:top-9 lg:fixed ">
                        <Profile></Profile>
                    </div>
                </div>
                {/* main content */}
                <div className="md:pl-12 lg:pt-9 md:pr-44 flex-1 space-y-20">
                    <Introduce id="introduce"></Introduce>
                    <Skills></Skills>
                    <ProjectsList></ProjectsList>
                    <ContactMe></ContactMe>
                </div>

                {/* drawer */}
                <div className="absolute top-5 right-5 lg:right-20 lg:top-14 z-50">
                    <Drawer></Drawer>
                </div>

                {/* navigation */}

                <div className="hidden lg:block fixed  right-20 top-48">
                    <Navigation></Navigation>
                </div>

            </div>
        </div>
    );
};

export default Root;