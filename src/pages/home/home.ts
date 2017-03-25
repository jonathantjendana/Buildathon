import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { NavController, ActionSheetController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { QuestionPage } from '../question/question';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  questions: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
  af: AngularFire, public actionSheetCtrl: ActionSheetController) {
    this.questions = af.database.list('/app/questions');
  }

addQuestion(){
    let prompt = this.alertCtrl.create({
    title: 'Question',
    message: "Enter a question",
    inputs: [
      {
        name: 'question',
        placeholder: 'Question'
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
          console.log(data.question);
          this.questions.push({
            questionTitle: data.question
          });
        }
      }
    ]
  });
  prompt.present();
}

viewQuestion(questionId){
  console.log(questionId);
  
  this.navCtrl.push(QuestionPage, {
    questionId: questionId
  });
}

}
