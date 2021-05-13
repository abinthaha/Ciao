import React from "react";
import "./styles.css";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      totalQuestions: [
        {
          word: "Hi all, With lots of mixed emotions I would like to tell you all that today is my last day in EY.",
          question: "Oh, I didn't knew",
        },
        {
          word: "I am really grateful for all the learnings, experiences and achievements that I am gifted with from this place.",
          question: "Oh, well... Ok.. So ?",
        },
        {
          word: "I would like to extend my sincere thanks to everyone who helped me as a mentor, lead, or a friend. Without any one of you I wouldn't have got any of these experiences that I have now. I would really want to mention some of them before leaving.",
          question: "Ok Thanks to you too!, whats your next plan?",
        },
        {
          word: "Anand, who had been a lead as well as mentor and who had guided me professionally and personally.",
          question: "Then who?",
          isName: "Anand",
        },
        {
          word: "Prateesh, who had been my Counsellor. He helped me to understand EY better, taught me the processes and pushed me to work smart.",
          question: "hmm, seems like a professional, then who?",
          isName: "Prateesh",
        },
        {
          word: "Sreenu and Shaswath who had been amazing friends more than colleagues. I will cherish all the times we had together.",
          question: "Long list??? Can you just.. combine all?",
          isName: "Shaswath",
        },
        {
          word: "I want to mention Venkat, Aswathy, Saumya, Senthil, Shubham, Ashly who had been great teammates. Thank you all.",
          question: "Hope you had a good time here in EY",
        },
        {
          word: "Bidding you adieu",
          question:
            "Ok, then I think this is the place where we wave our hands and say Good Bye, share your contact details",
        },
      ],
      pages: [
        {
          word: "Hi all, With lots of mixed emotions I would like to tell you all that today is my last day in EY.",
          question: "Oh, I didn't knew",
        },
      ],
      currentSection: 1,
    };
  }

  componentDidMount = () => {
    // let that = this;
    // document.addEventListener("scroll", function (e) {
    //   // lastKnownScrollPosition = window.scrollY;
    //   that.handleQuestion();
    // });
    // document.addEventListener("click", function (e) {
    //   // lastKnownScrollPosition = window.scrollY;
    //   that.handleQuestion();
    // });
    // document.addEventListener("keypress", function (e) {
    //   // lastKnownScrollPosition = window.scrollY;
    //   that.handleQuestion();
    // });
  };

  handleQuestion = () => {
    const { isLoading } = this.state;
    let { pages, currentSection, totalQuestions } = this.state;
    if (!isLoading) {
      if (currentSection < totalQuestions.length) {
        pages.push(totalQuestions[currentSection]);
        this.setState(
          {
            ...this.state,
            currentSection: currentSection + 1,
            pages,
          },
          () => {
            console.log(pages);
          }
        );
      }
    }
  };

  isLoading = (flag) => {
    this.setState({ isLoading: flag }, () => {
      if(flag === false) {
        let tat = this;
        setTimeout(function() {
          tat.handleQuestion()
        }, 1000)
      }
    });
  };

  render() {
    let { pages, currentSection, totalQuestions } = this.state;
    return (
      <>
        <h2 className="page-heading">Thank You</h2>
        {pages.map((item, index) => {
          return (
            index < currentSection && (
              <TypeWriter
                key={"type_" + index}
                text={item.word}
                isLoading={this.isLoading}
                isName={item.isName}
                question={item.question}
              />
            )
          );
        })}
        {pages.length === totalQuestions.length && (
          <section className="contact-wrapper">
            <div className="contact-item">
              <span>
                <a href="mailto:iamabinthaha@gmail.com">Email</a>
              </span>
            </div>
            <div className="contact-item">
              <span>
                <a
                  rel="noreferrer"
                  href="https://abinthaha.github.io/Dashboard"
                  target="_blank"
                >
                  Homepage
                </a>
              </span>
            </div>
          </section>
        )}
      </>
    );
  }
}

export class TypeWriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slice: "",
    };
  }
  componentDidMount() {
    this.setTypeWriter(this.props.text);
  }

  setTypeWriter(word) {
    var index = 0;
    this.props.isLoading(true);
    var typeWriter = setInterval(
      function () {
        this.setState({
          slice: word.slice(0, index),
        });
        index += 1;

        if (index > word.length) {
          clearInterval(typeWriter);
          this.props.isLoading(false);
        }
      }.bind(this),
      50
    );
  }
  getImage(name) {
    if (name !== "Shaswath") {
      let imgUrl = `https://raw.githubusercontent.com/abinthaha/Ciao/master/src/assets/${name}.jpg`;
      return (
        <span
          className="image"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></span>
      );
    } else {
      return (
        <>
          <span
            className="image"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/abinthaha/Ciao/master/src/assets/Sreenu.jpg)`,
            }}
          ></span>
          <span
            className="image"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/abinthaha/Ciao/master/src/assets/Shaswath.jpg)`,
            }}
          ></span>
        </>
      );
    }
  }
  render() {
    let { slice } = this.state;
    let { isName } = this.props;
    return (
      <section className="eachrow">
        <span className="typewriter-wrapper">
          {isName ? this.getImage(isName) : ""}
          <span className="typewriter-text">{slice}</span>
        </span>
      </section>
    );
  }
}

export default HomeComponent;
