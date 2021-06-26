import { Entity, PrimaryColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Tag from './Tag';
import User from './User';

@Entity('compliments')
export default class Compliment {
	@PrimaryColumn()
	readonly id: string;

	@JoinColumn({ name: 'user_sender' })
	@ManyToOne(() => User)
	userSender: User;

	@JoinColumn({ name: 'user_receiver' })
	@ManyToOne(() => User)
	userReceiver: User;

	@JoinColumn({ name: 'tag_id' })
	@ManyToOne(() => Tag)
	tag: Tag;

	@CreateDateColumn()
	created_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
