import React, { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');
		console.log(promptValue);

		if (promptValue && promptValue.length < 3) {
			setError('Строка содержит менее 3 символов');
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	const isValueValid = value.length >= 3;

	const onAddButtonClick = () => {
		if (isValueValid) {
			const updatedList = [...list, { id: Date.now(), value }];
			setList(updatedList);
			setValue('');
			setError('');
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение
				<output className={styles['current-value']}>: "{value}</output>"
			</p>
			{error && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueValid}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				<p className={styles['no-margin-text']}>
					{list.length === 0 ? 'Нет добавленных элементов' : ''}
				</p>
				<ul className={styles.list}>
					{list.map((object) => (
						<li key={object.id} className={styles['list-item']}>
							{object.value}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
