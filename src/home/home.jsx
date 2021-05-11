import React from "react";
import "./styles.css";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuestions: [
        {
          word: "As you know, today is my last working day in EY",
          question: "I didn't knew",
        },
        {
          word: "Ok, then... As you sure don´t know yet, aside from my only couple of teammates, today is my last day in EY",
          question: "Oh, well... Ok.. So ?",
        },
        {
          word: "So what? Thank you all for all the learning and maturing this job has gifted me with",
          question: "Ok Thanks to you too!, whats your next plan?",
        },
        {
          word: "Somewhere else, doing the same things probably",
          question:
            "Oh is it? then why you wanted to change if it will be as same as EY?",
        },
        {
          word: "Just for fun, I felt it is not the perfect time to settle somewhere safe and comfortable, so taking the risks and going for an adventure",
          question: "Oh, well, any special thanks",
        },
        {
          word: "Yeah, you bet, how can I go without thanking those who were with me?",
          question: "That's good, Who's first?",
        },
        {
          word: "Anand, who was my mentor and my lead, who guided me personally and professionally",
          question: "Then who?",
          isName: "Anand",
        },
        {
          word: "Prateesh, my counsellor, who helped me to understand EY better, taught me the processes and etc",
          question: "hmm, seems like a professional, then who?",
          isName: "Prateesh",
        },
        {
          word: "Then.. Shaswath and Sreenu, how can I forget you guys. Even though we were in only a few projects, our collaborative work made the dream work happen",
          question: "hmm, seems like a professional, then who?",
          isName: "Shaswath",
        },
        {
          word: "",
          question: "hmm, seems like a professional, then who?",
        },
      ],
      pages: [
        {
          word: "As you know, today is my last working day in EY",
          question: "I didn't knew",
        },
      ],
      currentSection: 1,
    };
  }
  componentDidMount = () => {
    this.setState({
        pages: this.state.totalQuestions
    })
  }

  handleQuestion = () => {
    let { pages, currentSection, totalQuestions } = this.state;
    if (currentSection < totalQuestions.length) {
      pages.push(totalQuestions[currentSection]);
      this.setState({
        ...this.state,
        currentSection: currentSection + 1,
        pages,
      });
    }
  };

  render() {
    let { pages, currentSection } = this.state;
    return pages.map((item, index) => {
      return (
        index < currentSection && (
          <TypeWriter
            key={"type_" + index}
            text={item.word}
            isName={item.isName}
            question={item.question}
            handleQuestion={this.handleQuestion}
          />
        )
      );
    });
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
    var typeWriter = setInterval(
      function () {
        this.setState({
          slice: word.slice(0, index),
        });
        index += 1;

        if (index > word.length) {
          clearInterval(typeWriter);
        }
      }.bind(this),
      0
    );
  }
  handleClick = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
    if (ev) {
      this.props.handleQuestion();
    }
  };
  getImage(name) {
    let imgUrl = '';
    switch (name) {
      case "Anand":
        imgUrl =
          "../assets/Anand.jpg";
        break;
      default:
        break;
    }
    return <span className="image" style={{ backgroundImage: `url(${imgUrl})` }}></span>;
  }
  render() {
    let { slice } = this.state;
    let { question, text, isName } = this.props;
    return (
      <section className="eachrow">
        <span className="typewriter-text">
          {isName ? this.getImage(isName) : ""}
          {slice}
        </span>
        {slice.length === text.length && (
          <div className="question">
            <span onClick={(ev) => this.handleClick(ev)}>{question}</span>
          </div>
        )}
      </section>
    );
  }
}

export default HomeComponent;
