import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Question page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  isAnswered: boolean = false;
  questionId: string
  question: FirebaseObjectObservable<any>
  answers: FirebaseListObservable<any>
  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire, private alertCtrl: AlertController) {
    this.questionId = this.navParams.get('questionId');
    this.question = af.database.object('/app/questions/' + this.questionId);
    this.answers = af.database.list('/app/questions/' + this.questionId + '/answers');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  answerQuestion() {
    let prompt = this.alertCtrl.create({
      title: 'Answer',
      message: "Answer Question",
      inputs: [
        {
          name: 'answer',
          placeholder: 'Enter your answer here'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.answers.push({
              answer: data.answer
            });
            this.isAnswered = true;
          }
        }
      ]
    });
    prompt.present();

  }

}
