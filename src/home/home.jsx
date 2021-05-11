import React from "react";
import "./styles.css";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuestions: [
        {
          word: "Hi all, as you know, today is my last working day in EY",
          question: "I didn't knew",
        },
        {
          word: "Ok, then... As you sure don´t know yet, aside from my only couple of teammates, today is my last day in EY",
          question: "Oh, well... Ok.. So ?",
        },
        {
          word: "So what? Thanks to all of you for all the learning and maturing this job has gifted me with",
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
          question: "Long list??? Can you just.. combine all?",
          isName: "Shaswath",
        },
        {
          word: "Hmm.. Let me see.. Aswathy P Kumar, Saumya Cherian, Senthil, Shubham, Jeffin Jacob, Nikhitha Prasad, Ashly Sunny, Arjun Sudhamol, Jinu Joy, Jasna, Sreelaskhmi, Vishnu K Kumar, Sujith Thomas, Aby Alex, Ashwin Kumar, Dibin Joseph, Harikrishnan, Arun Raj, Nandu R Nair, Vishnu G Sivan, Archish, Vignesh ........ Most of these people are not working in EY now, but those made my life in EY the best. There are more",
          question: "Hope you had a good time here in EY",
        },
        {
          word: "It was awesome, really good",
          question:
            "Ok, then I think this is the place where we wave our hands and say Good Bye, share your contact details",
        },
      ],
      pages: [
        {
          word: "Hi all, as you know, today is my last working day in EY",
          question: "Mm..., I didn't knew",
        },
      ],
      currentSection: 1,
    };
  }
  handleQuestion = () => {
    let { pages, currentSection, totalQuestions } = this.state;
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
    } else {
      window.open("https://abinthaha.github.io/Dashboard");
    }
  };

  render() {
    let { pages, currentSection } = this.state;
    return (
      <>
        <h2 className='page-heading'>Thank You</h2>
        {pages.map((item, index) => {
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
        })}
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
      50
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
              backgroundImage: `url(https://raw.githubusercontent.com/abinthaha/Ciao/master/src/assets/Shaswath.jpg)`,
            }}
          ></span>
          <span
            className="image"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/abinthaha/Ciao/master/src/assets/Sreenu.jpg)`,
            }}
          ></span>
        </>
      );
    }
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
            <span
              className={slice.length !== text.length ? "disable" : ""}
              onClick={(ev) => this.handleClick(ev)}
            >
              {question}
            </span>
          </div>
        )}
      </section>
    );
  }
}

export default HomeComponent;
