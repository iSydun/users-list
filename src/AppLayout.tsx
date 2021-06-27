import React, { ReactNode } from "react";
import style from "./AppLayout.module.scss";
import LanguageSelector from "./components/language_selector/LanguageSelector";
import PageRefresh from "./components/page_refresh/PageRefresh";
import AuthorSignature from "./components/author_signature/AuthorSignature";

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

class AppLayout extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    return (
      <div className={style.container}>
        <AuthorSignature />
        <LanguageSelector />
        {this.state.hasError ? <PageRefresh /> : this.props.children}
      </div>
    );
  }
}

export default AppLayout;
