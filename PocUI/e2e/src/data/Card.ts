import mongoose from 'mongoose';
import { Card as ICard } from '../../../src/app/core/models/card.model';

export class Card {
    static getSchema() {
        return new mongoose.Schema({
            title: String,
            subtitle: String,
            iconClass: String,
            linkUrl: String,
            linkLabel: String,
            i18nTitle: String,
            i18nSubtitle: String,
            i18nLinkLabel: String
        });
    }
    static getData() {
        const cards: ICard[] = [];
        cards.push({
            title: 'Angular Tutorial',
            subtitle: 'Tutorial',
            iconClass: 'card-header-image',
            linkUrl: 'https://angular.io/tutorial',
            linkLabel: 'Visit tutorial',
            i18nTitle: '@@cardTitleTutorial',
            i18nSubtitle: '@@cardSubtitleTutorial',
            i18nLinkLabel: '@@cardLinkTutorial'
        });
        cards.push({
            title: 'CLI Documentation',
            subtitle: 'Documentation',
            iconClass: 'card-header-image',
            linkUrl: 'https://angular.io/cli',
            linkLabel: 'Visit documentation',
            i18nTitle: '@@cardTitleDocumentation',
            i18nSubtitle: '@@cardSubtitleDocumentation',
            i18nLinkLabel: '@@cardLinkDocumentation'
        });
        cards.push({
            title: 'Angular blog',
            subtitle: 'Blog',
            iconClass: 'card-header-image',
            linkUrl: 'https://blog.angular.io/',
            linkLabel: 'Visit blog',
            i18nTitle: '@@cardTitleBlog',
            i18nSubtitle: '@@cardSubtitleBlog',           
            i18nLinkLabel: '@@cardLinkBlog'
        });
        return cards;
    }
}
