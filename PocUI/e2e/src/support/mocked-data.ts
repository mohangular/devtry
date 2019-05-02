import mongoose from 'mongoose';
import { Card } from '../data/Card';

export class MockedData {
    static insertData (): Promise<any> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating mocked data...');
        mongoose.connect('mongodb://localhost:3000/a7new', { useNewUrlParser: true });
        let data = [];
    
        // Cards
        const cardsCol = mongoose.model('Card', Card.getSchema(), 'Cards');
        data.push(cardsCol.insertMany(Card.getData()).then((docs) => {
            console.log('\x1b[33m%s\x1b[0m', 'Inserting Cards...');
            console.log('\x1b[36m%s\x1b[0m', docs); // Output data (can normally comment out)
        }));
    
        return Promise.all(data).then(() => {
            console.log('\x1b[32m%s\x1b[0m', 'Data successfully created.');
        });
    }
}
