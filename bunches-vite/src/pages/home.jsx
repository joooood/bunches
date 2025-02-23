import React from "react";

import "./home.css";
import Navbar from "../components/navbar";

function Hero() {
  return (
    <div className="hero isolate grid items-end justify-center w-screen h-screen">
      <div className="hero-caption absolute grid place-self-center w-[90%] font-display font-black text-(length:--heading-size) leading-(--leading-size) text-(--custom-dark-pink)">
        <span className="justify-self-start pl-[10%]">Petal</span>
        <span className="justify-self-end">Poetry</span>
      </div>
      <picture className="hero-picture relative justify-self-center w-[65%]">
        <img
          className="hero-picture-img w-full"
          src="https://purepng.com/public/uploads/large/flowers-bouquet-zlj.png"
          alt=""
        />
      </picture>
      <ol className="socials absolute right-[12.5%] bottom-[20%] flex gap-2">
        <li className="facebook social-link h-full filter-(--plum-logo)">
          <a href="">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALhJREFUSEvtlMENgzAQBJdOKIVSQiWESkgnCZWEUsJItuQH9sknW8qD+wAS2jnP2R7UuYbO+fo7wChpkTRJ4v04ny9Ja85EzQoI/F4EAZhbAOj82RPwDmpgfELXKCpWjSL0oIliJVnvKdELwDnuzbIAcbcQtCVphO/hG11ZVRaA0IfRZlFXC0BRlwWIh4pFMOA4ZJRELQDcilI76S5qNuQbUHVd3zMwr5XuiswOrn6wTrIr1Htdu2A/WHsqGQUWIeAAAAAASUVORK5CYII=" />
          </a>
        </li>
        <li className="twitter social-link filter-(--plum-logo)">
          <a href="">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQ5JREFUSEvlldENwjAMRK+bwCTAJMAkwCTAJLAJbAJ6VYyS1EmTj35hCVFI4rPvLu6ghWNYOL/+F2Ar6SRpFSi+SbqE3/vwPC7lFD0kHSW9K9ocJF2ddc4AyHkAXYBPSG4VeTjsKQUgT0n38J10APorOnkOG+NuStXHgDtLXqIIfi1IzoeKjAKPHttP51D0i1wDKozF670mVYCcot7k7E8EbqGoF2SdOzCniC6wqvm7F2AyGbxRgchcFvToiQk9HkX812LFHBiHQc8kSsMOJ3EPWiPxfs2m8Ro6QNUckEuNJfI6MIHpYk6HYuUeQI+DmDdzQ3HE8GyKizbBqrFd40FWm7aJbv/7Rmu17/Iv/S/ZejIZnal+BAAAAABJRU5ErkJggg==" />
          </a>
        </li>
        <li className="instagram social-link filter-(--plum-logo)">
          <a href="">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAW5JREFUSEvFlc1NBDEMhd82wRWoBLhwpwAEVAKIQoAyOAGV8HPhTAWwH/IbWRPPbFZotJFWq1Ecv5/YzkoLr9XC+bUzgANJF5KO4zcl9D02XiTdSvL3EF8puJR0HxEc4PDcggxEiH0IoEkAgt8i6ckW98O554i/yqTGCmCOgsNKbgF4Hoy/JZ1V5MYAsEdqxR7g/bUNsH0NO04lPUn6jD2rGM6PAX7iIDK9SIgyfM4LIneSviTtrVU/hk3E48Df6gGAFclvwg5XGN+ADMmCCEqHvJsAXFFOnhV4Dztcab7DWYCcbO7SXXFVfDfAdVgzVVXc2b8A8J47qCwyOAVBg7G6LCLYVeQK4t9dmi8Z73NJbw0Aq7kyJXmePxsBmkYJ6Z43R5HwI9mSK6tp1GpU4PuYWc9YclVli5tGc5DHRTN+J5CyjbkvygfHDZRnfc+4JiZXVDkq8vyhDO39HIDfDGZR83bs7MnsudSumMUV/AIe7GgZglVbgwAAAABJRU5ErkJggg==" />
          </a>
        </li>
        <li className="tiktok social-link filter-(--plum-logo)">
          <a href="">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQ1JREFUSEvFldENwjAMRK+bwCYwCTAJMAkwCWwCo8CTEpQaJ43aRPgnUhv77PP1OqhzDJ3raw7ARdI+NPaStC41uRSA2gAA5EYLgKukQ08Aap8knT2QFhPEuo8PXTdJnF/KWgJEoBFlfwdYSdpJ4ozjW5luwx2ky72qCbh4DwlxdJRCcuk7IG8kWY+iTShuRVED8CMkD+BpOieJrpDh1ASTAPAIBan04DiNRVaRJlPUm3ARAItlB0TOApoB5Jwy3VHRhzwK7A6sxxyD77hfbY0XoWM6TIMuCajjfRpFq84t0U7hNcazrIOmCTkvslRYkKriuQlisehD0WNYOnThSdk/mO1kjpvmKHOfdwd4A1ShQhkDPx1fAAAAAElFTkSuQmCC" />
          </a>
        </li>
        <li className="patreon social-link filter-(--plum-logo)">
          <a href="">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATpJREFUSEvd1bErhVEYx/HPLRlkUspiUKJEWZSFSSmjf0BKGWRhYFeKMJgNysLgH1BEVosoKSYpkmxkkfeUq7fb6zpH3Ts401vv73m+5/md5zynpMarVOP86goIsN1cRUu4rKiwF4PoQxuecIFD3BS5ka8gfH/kRCFJHjCRJZzBQEGiK2xgq/JfLGAWy2iucmaPX5rNvCYGEHa8h46IhnjBOI7L2hjAGuYjkpclwapvfQzgGl0JgHP0p1TwnnnbmAB4RjveQkxMBSGgJQFwh+4UwAmGEwDhToykWDSH9QTAAlZTAK3YwWgE5BSTuE0BBO0YFrORMFQFcoQVHKRetLK+B9OYyixoyiV5yGbTPrZx9tdRkY/rRBh6DXjFPULvF66YNo2w/mfJ/wP89uAk21XXJzN5dzEBNa/gE2g3TBkOA2VeAAAAAElFTkSuQmCC" />
          </a>
        </li>
        <li className="pinterest social-link filter-(--plum-logo)">
          <a href="">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASlJREFUSEvVlA0OATEQhZ+bcBNOgpPgJDgJTsJNyCd9Uk2n25VIaLLZv3a+eW+mnejLY/Ll+PoZwErSUtI0XWdJXJd0D40YUjCXdCpW39I7MMZW0i4itABkvc+CHCU5OJ/5v0mKQkgEILtrCr5o2ACA4IxZkcDzYwTwwoOkdcrSanjPlZAICVVVRAB8x39nn2cKALAHYOyi6Mx/GxHAWVm231lcWmYAqpj/EcCKarb63ygFtsS+RlnmzTCqBmTqLkL2Pel20W3Dx13kABQabw3jmRpwzzdhCX7VYWgnMzHPksDY4jv/q96bMAZAIHYzQAYQvoXHRGuj5a3mLmmeOWV7jlHgAlePgihwL8BtWN1EQ8F7LUJB68BrcnqL3Cxki9AD6HEinPP/gAc5zkoZ4SEWXAAAAABJRU5ErkJggg==" />
          </a>
        </li>
      </ol>
      <a
        href=""
        className="store-arrow fixed left-5 flex h-(--navbar-height) pb-5 filter-(--dark-pink-logo)"
      >
        <img
          className="w-full h-full"
          src="https://www.svgrepo.com/show/520983/store-2.svg"
          alt=""
        />
        <img
          className="w-full h-full p-2.5"
          src="https://www.svgrepo.com/show/521064/arrow-down.svg"
          alt=""
        />
      </a>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="homepage w-screen h-screen bg-radial from-white via-(--custom-pink) to-(--custom-pink)">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default Home;
