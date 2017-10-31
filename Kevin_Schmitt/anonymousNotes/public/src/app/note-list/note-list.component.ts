import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input() notes: Note[];
  @Output() destroyNoteEvent = new EventEmitter();

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _noteService: NoteService
  ) { }

  ngOnInit() {
  }

  destroyNote(id:string, idx:number){
    console.log('...destroying...')
    this._noteService.destroy(id, res => {console.log('stilltrying');
    this.destroyNoteEvent.emit(idx)});
  }
  


  // createNote(){
  //   this.errors = [];
  //   this.__noteService.create(
  //     this.newNote,
  //     note => {
  //       if(note.errors){
  //         for(const key of Object.keys(note.errors)){
  //           const error = note.errors[key];
  //           this.errors.push(error.message);
  //         }
  //       }else{
  //         this.newNote = new Note();
  //         this.createNoteEvent.emit();
  //       }
  //     }
  //   );
  // }

}
