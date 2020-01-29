<style>
  .info {
    margin: 1em;
    padding: 1em;
    background-color: white;
  }
  li {
    padding: 0.5em;
    list-style-type: disc;
  }
</style>

<div class="info">
  <h2>Opis aplikacji</h2>

  <h3>Uzytkownicy</h3>
  <p>Do aplikacji trzeba sie zalogowac. Mamy 3 rodzaje uzytkownikow:</p>

  <ul>
    <li>
      <strong>Admin</strong>
      wlascicel aplikacji (
      <strong>admin@admin.com</strong>
      , pass:
      <strong>admin 1234</strong>
      )
    </li>
    <li>
      <strong>Editor</strong>
      - moze edytowac i dodawac dokumenty - nie moze usuwac (tymczasowo nie
      dziala) i dodawac uzytkownikow (
      <strong>editor@editor.com</strong>
      , pass:
      <strong>editor1234</strong>
      )
    </li>
    <li>
      <strong>Gosc</strong>
      - moze jedynie przegladac dokumenty z przypisanej mu katerori (
      <strong>gosc@gosc.com</strong>
      , pass:
      <strong>gosc1234</strong>
      )
    </li>
  </ul>

  <h3>Dokumenty</h3>
  <p>
    Dokumenty to tak na prawde tylko zalaczniki do wydarzen - tworzymy rodzaj
    dziennika. Kazde wydarzenie ma Nazwe, Date (+ opcjonalnie date koncowa),
    Krotki i dlugi opis, Koszt oraz Link do dokumentu.
  </p>

  <p>
    Do wydarzen mozemy linkowac nie tylko PDF ale inne formaty dokumentow oraz
    fotografie.
  </p>

  <p>
    Wydarzenia (Dokumenty) dzielimy na Kategorie - oddzielne niezalezne
    'szuflady' Aktualnie mamy wspolna liste tagow dla wszystkich kategorii: Tagi
    ktore dowolnie przydzielamy do dokumentow. Tagow uzywamy jako opcji
    wyswietlania. Liste dostepnych tagow moze edytowac Admin, edytor tylko ich
    uzywa. Domyslnie dokumenty wyswietlane sa chronologicznie.
  </p>

  <p>
    Do dzialania aplikacji potrzebujemy dokumety miec zeskanowane i udostepnione
    online (np na Google Drive). Jesli dokument jest w formacie PDF mozemy
    ogladac go w przegladarce i stamtad zapisac. Jesli przegladarka nie moze go
    wyswietlic to musi byc zapisany aby go zobaczyc.
  </p>

  <h3>Raporty</h3>
  <p>
    Dokumenty mozemy dolaczac do Raportu, ktory mozemy zapisac jako PDF, wyslac
    mailem lub wydrukowac. (TODO) Raporty mozemy sobie zapisac.
  </p>

  <h3>Mozliwe zastosowoania</h3>
  <ul>
    <li>
      Do organizacji dokumentow medycznych - historia badan, wyniki - wszystkie
      mamy zawsze przy sobie kiedy potrzebujemy pokazac lekarzowi.
    </li>
    <li>
      Przy wszelkiego rodzaju konrolach uzednikow - udostepniamy im dokumenty
      online z mozliwoscia poproszenia o oryginaly - nie musza przewalac
      papierow.
    </li>
    <li>Historia zakupow paragony - zawsze mamy przy sobie - w telefonie.</li>
    <li>
      Dokumentacja prawna mozemy przedstawic prawnikowi lub sedziemu w wygodnej
      do przegladania formie. Jesli jest koniecznosc zestawy dokumentow
      dotyczacych danego aspektu sprawy (tagi) mozemy przedstawic w formie
      Raportu, przeslac na maila lub wydrukowac.
    </li>
  </ul>

</div>
