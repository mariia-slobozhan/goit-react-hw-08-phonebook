import s from "./HomeView.module.css";

export default function HomeView() {
  return (
    <div className={s.container}>
      <article className={s.content}>
        <h1 className={s.title}>Your personal virtual phonebook</h1>

        <p className={s.description}>
          Keep in touch with your friends and relatives thanks to the saved
          contacts in the application
        </p>
      </article>
    </div>
  );
}
