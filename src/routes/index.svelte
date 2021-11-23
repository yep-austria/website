<script>
  import Quote from '$lib/Quote.svelte'
  import InstagramIcon from '~icons/prime/instagram'
  import FacebookIcon from '~icons/prime/facebook'
</script>

<svelte:head>
  <title>YEP – Stimme der Jugend</title>
  <meta
    name="description"
    content="YEP setzt sich mit Jugendlichen für Jugendliche ein. 
Für mehr Mitsprache und wahre Mitbestimmung in der Gesellschaft. 
“If it is about them, don’t do it without them.“ "
  />
  <meta
    name="keywords"
    content="Stimme der Jugend, YEP, Jugend, Engagement, 
                    Partizipation, Jugendliche ernst nehmen, Mitgestaltung"
  />
</svelte:head>
<section class="hero">
  <div class="content">
    <img class="logo" src="/assets/yep-logo.png" title="YEP-Austria" alt="YEP Logo" />
    <img
      class="subline"
      src="/assets/stimme-der-jugend.png"
      title="YEP - Stimme der Jugend"
      alt="Stimme der Jugend"
    />
  </div>
</section>

<section class="slide slide--side-by-side about-us">
  <div>
    <Quote --background-image="url('/assets/hands.png')">
      Niemand kommt der Zukunft näher als Jugend&shy;liche.
      <span slot="sub">#encourage #empower #enable</span>
    </Quote>
  </div>
  <div class="content">
    <p>
      Wir sind YEP.<br />
      Wir sind die Stimme der Jugend. <br />
      Und jetzt sind wir dran.
    </p>
    <p><strong>Wir nehmen unsere Zukunft<br />selbst in die Hand.</strong></p>
    <a href="/about/" class="button">Erfahre mehr über uns </a>
  </div>
</section>

<section class="slide slide--side-by-side about-them">
  <div>
    <Quote --background-image="url('/assets/lightning.png')">
      If it’s about them, don’t do it without ’em.
    </Quote>
  </div>
  <div class="content">
    <p><strong> Die Zukunft gehört nicht nur euch,<br />sie gehört auch uns.</strong></p>
    <p>
      Es geht um uns. Es betrifft uns.<br />
      Wir sind ein Teil davon,<br />
      also wollen wir auch beteiligt sein.<br />
      Wir wollen mitreden, mitbestimmen, mitgestalten.
    </p>
    <p>
      Unsere Stimme ist wichtig.<br />
      Unsere Meinung ist wichtig.<br />
      Wer das heute noch nicht weiß,<br />
      wird das morgen lernen.<br />
    </p>
  </div>
</section>

<section class="slide slide--side-by-side more-info">
  <div class="design">
    <img
      width="82"
      height="82"
      src="/assets/yep_graphic.png"
      title="YEP neues Brand Design"
      alt="Illustration YEP Austria neues Design"
    />
    <h2>Die Geschichte beginnt.<br />Mit dir.</h2>
    <p>Bleib dran, bald findest du hier unsere Webseite.</p>
  </div>
  <div class="design">
    <img
      width="82"
      height="82"
      src="/assets/yep_contact.png"
      title="Schreib uns!"
      alt="Illustration Kontakt"
    />
    <h2>Lass von dir hören!</h2>
    <p>
      Du willst mitmachen? Mitreden? Wissen, was zur Hölle wir da machen?<br />
      <a href="mailto:hello@yep-austria.org">hello@yep-austria.org</a>
    </p>
    <p>
      Folge uns auch auf Social Media:<br />
      <a href="https://www.facebook.com/YEP.austria/" target="_blank"
        ><FacebookIcon style="width: 3rem; height: 3rem;" /></a
      >
      <a href="https://www.instagram.com/yep_austria/" target="_blank"
        ><InstagramIcon style="width: 3rem; height: 3rem;" /></a
      >
    </p>
  </div>
</section>

<style lang="scss">
  .hero {
    height: calc(100vh - var(--navbar-height));
    min-height: 600px;
    text-align: center;
    background-color: #7cefc0;
    background-image: url('/assets/header_background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      max-width: min(385px, 90%);
    }
    .subline {
      margin-top: 20%;
      width: 60%;
    }
    .subline img {
      max-width: 222px;
    }
  }
  .slide {
    padding-top: max(3rem, 20vw);
    padding-bottom: max(3rem, 20vw);
    &--side-by-side {
      display: flex;
      gap: 5vw;
      flex-direction: column;
      align-items: center;
      @media (min-width: 40rem) {
        flex-direction: row;
        justify-content: space-between;
        > * {
          flex: 1;
        }
      }
    }
  }

  .button {
    background-color: none;
    border: solid 1.5px currentColor;
    color: currentColor;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    margin-top: 20px;
    transition: opacity 0.5s;
  }

  .about-us {
    background-color: #ef7c8c;
  }
  .about-them {
    background-color: #ee7102;
    @media (min-width: 40rem) {
      .content {
        order: -1;
      }
    }
  }
  .more-info {
    background-color: #7cefcd;
    @media (min-width: 40rem) {
      align-items: flex-start;
    }

    .design {
      text-align: center;
      a {
        color: white;
        font-weight: 900;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
