import styles from "@/styles/about.module.css";
import Header from "../header";
export default function About() {
  return (
    <main>
      <Header />

      <div>
        <div className="space-y-3">
          <h1 className={styles.h1}>
            Hey!
            <br />{" "}
            <span className={styles.span}>
              I am Dawood, a Creative Web Developer
            </span>
          </h1>
          <p className="ml-14">
            Passionate web developer with a strong foundation in both front-end
            and <br /> back-end technologies. Skilled in creating user-centric,
            responsive websites <br /> and applications that are both visually
            appealing and highly functional. With a <br /> commitment to staying
            updated with industry trends and best practices, I strive <br /> to deliver
            optimal solutions that drive user engagement and meet client needs <br />
            effectively.
          </p>
        </div>
        <img className={styles.pic} src="https://iamshaaani.co/wp-content/uploads/2024/08/Iamshaaani-Data-BI-Developer.webp" alt="" />
      </div>
      <div className={styles.icons}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASxJREFUSEvl1TsvBFEYh/HfCp2Igso3oNXoKFQKIa6hk/AtJD6GS4m4h0InLo1G7xPoRKUl7Elem81erZndxlQzOe88z5z/Oe+cgjZfhTbzdVxwh/GMs7rHxA+jcgZfGeFV3EaC66ie+oO0xK0nOMBqgA+x3KKkqWAX6wHdw1regnfsowsr6M1b8IrngA5jsLgzHuJ5CP3YxgdGMFfxAU0jOsZSvHSERUo9M4MnvJRBN4vjW2XPTQUnAU3vJNlCxFVvG3fjDX0hySTowRVGQ5waK12PGMtDkLr0NkA72Ij7S0znIUhrcBGgWlGmoaYRncb0U3GCzCPl/IlZnIfgLMbK6/6JoFGjDURzpShq1f0qohb/DFXldRc5jwPnBpM/yo4fmVmjqZ9V7uQAfgNR+VIZag7oTQAAAABJRU5ErkJggg==" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvt1CFOQ0EQxvFfBSHoguEIxSEqMBgOQELKDUpAYlA1FXgcTbB1xRBsBQJLD1ASJCS0VyCBl4xompLNvryXVHTVZHfn+8/O7ExDzatRs761AxzgFm3s4hND9P7LRM4L9vGB7SWxR3SqANzjcoXQCOdVAN5wGEIvOMFP6pPkpOgbeyF4hUFKvDjPAczRDNELPFQBKHLbCqEb7IT9jEnYrxiXrUHxQ84SkV7jrk7AKZ7KAvo4DuejvybbCnuKr7C7eC8LWPSbRfcWe5UVeQPIarRNDZKTpfYUJSNYdSFnmq4n4BdfByoZ/9M5/QAAAABJRU5ErkJggg==" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZtJREFUSEvd1b1rFVEQBfBfNKAQsYqFoBiFIEIUESstlYAhYJQQIoJFLETsFUXxD9DGQrERCdjYWAiBFDYS0gQFxRSpEhIQBbESwS9I7sA+WNbdzb4Hr8nt9s6dc+6cO3O2R5dXT5fxbT2CPvzcRLbduI9RHMRfPMYd7MX57Hs9cPISbcciJvCphuQNzpTE17Afl/CyFc8TDGAF33AB8yUgJ/C+hvwd3uIFPhQr2Ikf6M0AnuEevuQAL2fJVRwh740k3XRZBbEXtz5VyJ7DayzgOB7VVPAcU/l4XqJdOIxZ9Hc4Hw9ws4pgH1bxPXXBng4JQp4nVQTbsIwDHYJH2hEsVRHE/sWsxVoP3Q5XdOChYkKZVcQc3MXRdtBxHU+bEIxgpk3wGLLBNM1/mhDEmejjKw1J/uF01sb/pVS5aTz4EG6nR5usIQq/uZoaI/q/dJURhOGdxC2cqwH/hZjsV3WV5gnO4mFKOFYwwbL8GMZraWpD+9pVrCCseDwZ1RiGsSPJ9Btf8RnhpHHjj5sBt+Jb74/WtPLG57ou0QbqWz0ZBzSqswAAAABJRU5ErkJggg==" />
      </div>
    </main>
  );
}
