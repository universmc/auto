const TimesStampJanvier = [
    {
        timestamp: 1673016800,
        subject: "Réseaux de neurones",
        summary: "Discussion sur les types de neurones (moteurs, sensitifs, convolutés)",
        events: "Début de notre collaboration et discussions sur les réseaux de neurones."
      },
      // ...
    ];
    
    for (let entry of TimesStampJanvier) {
      const date = new Date(entry.timestamp * 1000);
      entry.date = date.toLocaleString('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      delete entry.timestamp;
    }

for (let entry of TimesStampJanvier) {
  const date = new Date(entry.timestamp * 1000);
  entry.date = date.toLocaleString('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  delete entry.timestamp;
};
  
  for (let entry of TimesStampJanvier) {
    const date = new Date(entry.timestamp * 1000);
    entry.date = date.toLocaleString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    delete entry.timestamp;
  }
  
  console.log(TimesStampJanvier);
  