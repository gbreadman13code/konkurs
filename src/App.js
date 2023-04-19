import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import MainScreen from "./components/screens/MainScreen/MainScreen";
import ResultsScreen from "./components/screens/ResultsScreen/ResultsScreen";
import { fetchContests } from "./requests/getContests";
import NewsScreen from "./components/screens/NewsScreen/NewsScreen";
import { getNews } from "./requests/getNews";
import AboutScreen from "./components/screens/AboutScreen/AboutScreen";
import StagesScreen from "./components/screens/StagesScreen/StagesScreen";
import JuriScreen from "./components/screens/JuriScreen/JuriScreen";
import PartnersScreen from "./components/screens/PartnersScreen/PartnersScreen";
import Footer from "./components/elements/Footer/Footer";
import AdditionalInfoScreen from "./components/screens/AdditionalInfoScreen/AdditionalInfoScreen";
import ParticipantsDocs from "./components/screens/ParticipantsDocs/ParticipantsDocs";
import FooterMobile from "./components/elements/Footer/FooterMobile";
import NotFoundPage from "./components/screens/NotFoundPage/NotFoundPage";

const App = () => {
  const state = useSelector((state) => state.contests);
  const [isMobile, setIsMobile] = useState(false);
  const [slug, setSlug] = useState();
  const [isNotFound, setNotFound] = useState(false);

  useEffect(() => {
    const string = window.location.pathname.substring(1);
    setSlug(string);
  }, []);

  const resize = () => {
    if (window.innerWidth > 1000) setIsMobile(false);
    if (window.innerWidth <= 1000) setIsMobile(true);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (!state) return;
    document.title = state.contests.title
      ? state.contests.title
      : "Институт города";

    dispatch(getNews(state.contests.id));
  }, [state.contests.id]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      return;
    }
    setNotFound(false);
    dispatch(fetchContests(slug, setNotFound));
  }, [dispatch, slug]);

  return isNotFound ? (
    <NotFoundPage />
  ) : (
    <div>
      <MainScreen />
      {state.contests && state.contests.results.length > 0 && <ResultsScreen />}

      {isMobile ? (
        <>
          {state.contests && state.contests.abouts.length > 0 && (
            <AboutScreen />
          )}
          {state.news && state.news.results.length > 0 && <NewsScreen />}
        </>
      ) : (
        <>
          {state.news && state.news.results.length > 0 && <NewsScreen />}
          {state.contests && state.contests.abouts.length > 0 && (
            <AboutScreen />
          )}
        </>
      )}

      {state.contests && state.contests.stages.length > 0 && <StagesScreen />}
      {state.contests &&
        state.contests.additional_photos.length > 0 &&
        state.contests.full_description &&
        state.contests.sections_titles !== null &&
        state.contests.sections_titles.info && <AdditionalInfoScreen />}
      {state.contests && state.contests.documents.length > 0 && (
        <ParticipantsDocs />
      )}
      {state.contests && state.contests.jury.length > 0 && <JuriScreen />}
      {state.contests && state.contests.partners.length > 0 && (
        <PartnersScreen />
      )}
      {isMobile ? <FooterMobile /> : <Footer />}
    </div>
  );
};

export default App;
