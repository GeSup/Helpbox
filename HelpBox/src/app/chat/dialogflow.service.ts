//can be deleted
import { Injectable } from '@angular/core';
//import { dialogflow } from 'dialogflow';
import { environment } from 'src/environments/environment';
import { Uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DialogflowService {
  sessionClient: any;
  LANGUAGE_CODE: string = 'pl';

  constructor (private projectId: String) {
		this.projectId = environment.dialogflow.project_id;

		let privateKey = environment.dialogflow.private_key;
		let clientEmail = environment.dialogflow.client_email;
		let config = {
			credentials: {
				private_key: privateKey,
				client_email: clientEmail
			}
		}

	//	this.sessionClient = new dialogflow.SessionsClient(config)
	}

	async sendTextMessageToDialogFlow(textMessage, sessionId) {
		// Define session path
		const sessionPath = this.sessionClient.sessionPath(this.projectId, sessionId);
		// The text query request.
		const request = {
			session: sessionPath,
			queryInput: {
				text: {
					text: textMessage,
					languageCode: this.LANGUAGE_CODE
				}
			}
		}
		try {
			let responses = await this.sessionClient.detectIntent(request)
			console.log('DialogFlow.sendTextMessageToDialogFlow: Detected intent');
			return responses
		}
		catch(err) {
			console.error('DialogFlow.sendTextMessageToDialogFlow ERROR:', err);
			throw err
		}
	}

}
