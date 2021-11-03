const jobs = [
	{
		"ID": 1,
		"Descrição": "Importação de arquivos de fundos",
		"Data Máxima de conclusão": '2021-02-04 12:00:00',
		"Tempo estimado": '8 horas'
	},
	{
		"ID": 2,
		"Descrição": 'Importação de dados da Base Legada',
		"Data Máxima de conclusão": '2021-02-04 12:00:00',
		"Tempo estimado": '4 horas'
	},
	{
		"ID": 3,
		"Descrição": 'Importação de dados',
		"Data Máxima de conclusão": '2021-02-02 12:00:00',
		"Tempo estimado": '6 horas'
	},
	{
		"ID": 4,
		"Descrição": 'Desenvolver historia 745',
		"Data Máxima de conclusão": '2021-02-02 12:00:00',
		"Tempo estimado": '2 horas'
	},
	{
		"ID": 5,
		"Descrição": 'Gerar QRCode',
		"Data Máxima de conclusão": '2020-02-15 12:00:00',
		"Tempo estimado": '6 horas'
	},
	{
		"ID": 6,
		"Descrição": 'Importação de dados de integração',
		"Data Máxima de conclusão": '2020-02-15 12:00:00',
		"Tempo estimado": '8 horas'
	},
];

const startDate = new Date('2019-11-10 08:00:00');
const endDate = new Date('2019-11-11 12:00:00');

const count = 0;

for (i = 0; i < jobs.length; i++) {
	var index = jobs[i].MaxDate;

	console.log(jobs[i].MaxDate);

	if (startDate.getTime() <= new Date(jobs[i].MaxDate).getTime() && endDate.getTime() >= new Date(jobs[i].MaxDate).getTime()) {

		console.log(`Data contida ${dateIndex}`);

	} else {
		console.log(`Data fora ${jobs[i].MaxDate}`);
	}
}

for (i = 0; i < jobs.length; i++) {
    console.log(jobs[i].MaxDate, jobs[i].ID);
}

jobs.sort(function(a, b) {
    var date1 = new Date(a.MaxDate),
        date2 = new Date(b.MaxDate);
    return date1 - date2;
});

for (i = 0; i < jobs.length; i++) {
    console.log(jobs[i].MaxDate, jobs[i].ID);
}

for (i = 0; i < jobs.length; i++) {

    count = count + jobs[i].time;

    const print = jobs[i].ID

    console.log(print);

    if (count == 8) {
        
        count = 0;
    }
}



