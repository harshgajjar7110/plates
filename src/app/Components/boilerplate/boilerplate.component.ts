import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../Services/Api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-boilerplate',
  templateUrl: './boilerplate.component.html',
  styleUrls: ['./boilerplate.component.css']
})

export class BoilerplateComponent implements OnInit {
  users: any;
  repo: any;
  demo: any;
  id: string;
constructor(private apiservice: ApiService, private route: ActivatedRoute) {
}

nodejs() {
return this.apiservice.nodejs()
.subscribe(re => {
  this.repo = re;
  this.demo = this.repo.items;
 console.log(this.demo);
});
}
php() {
  return this.apiservice.php()
  .subscribe(re => {
    this.repo = re;
    this.demo = this.repo.items;
  console.log(this.demo);
  });
}
django() {
  return this.apiservice.django()
  .subscribe(re => {
    this.repo = re;
    this.demo = this.repo.items;
  console.log(this.demo);
  });
}
react() {
  return this.apiservice.react()
  .subscribe(re => {
    this.repo = re;
    this.demo = this.repo.items;
  console.log(this.demo);
  });
}
express() {
  return this.apiservice.express()
  .subscribe(re => {
    this.repo = re;
    this.demo = this.repo.items;
  console.log(this.demo);
  });
}
angular() {
  return this.apiservice.angular()
  .subscribe(re => {
    this.repo = re;
    this.demo = this.repo.items;
  console.log(this.demo);
  });
}
ios() {
  return this.apiservice.ios()
  .subscribe(re => {
    this.repo = re;
    this.demo = this.repo.items;
  console.log(this.demo);
  });
}
android() {
  return this.apiservice.android()
  .subscribe(re => {
    this.repo = re;
    this.demo = this.repo.items;
  console.log(this.demo);
  });
}
jquery() {
  return this.apiservice.jquery()
  .subscribe(re => {
    this.repo = re;
    this.demo = this.repo.items;
  console.log(this.demo);
  });
}
wordpress() {
  return this.apiservice.wordpress()
  .subscribe(re => {
    this.repo = re;
    this.demo = this.repo.items;
  console.log(this.demo);
  });
}
api() {
  return this.apiservice.api(this.id)
  .subscribe(re => {
    this.repo = re;
    this.demo = this.repo.items;
  console.log(this.demo);
  }
);
}
ngOnInit() {

  this.id = this.route.snapshot.paramMap.get('id');
  console.log(this.id);


  if (this.id === 'express') {
  this.express();
} else if (this.id === 'nodejs') {
  this.nodejs();
} else if (this.id === 'php') {
  this.php();
} else if (this.id === 'django') {
  this.django();
  } else if (this.id === 'react') {
  this.react();
 } else if (this.id === 'angular') {
  this.angular();
 } else if (this.id === 'api') {
   this.api();
 } else if (this.id === 'ios') {
  this.ios();
} else if (this.id === 'android') {
  this.android();
} else if (this.id === 'jquery') {
  this.jquery();
} else if (this.id === 'wordpress') {
  this.wordpress();
}

}
}
