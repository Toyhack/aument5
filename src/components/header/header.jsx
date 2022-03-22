import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Node JS & MongoDB</span>
        <span className="headerTitleLg">React BLOG Design</span>
      </div>
      <img
        className="headerImg"
        src="https://fsa2-assets.imgix.net/assets/laptop-coding-terminal.jpg?auto=compress%2Cformat&crop=focalpoint&domain=fsa2-assets.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.0&w=1280"
        alt=""
      />
    </div>
  );
}
